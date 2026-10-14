import assert from "node:assert/strict";
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import worker from "../dist/server/index.js";

// The cPanel site serves static HTML. Keep rendering sourced from the React pages,
// with native navigation and a small theme controller instead of a Worker runtime.
const output = new URL("../outputs/hosteg-release/", import.meta.url);
await mkdir(output, { recursive: true });
await cp(new URL("../public/", import.meta.url), output, { recursive: true });
await cp(new URL("../dist/client/_next/", import.meta.url), new URL("_next/", output), { recursive: true });

const themeScript = `(() => {
  const key = "instituto-cuidar-theme";
  let dark = false;
  try { dark = localStorage.getItem(key) === "dark"; } catch {}
  function apply() {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    const button = document.querySelector(".theme-toggle");
    if (button) {
      button.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
      button.textContent = dark ? "☀ Modo claro" : "☾ Modo escuro";
    }
  }
  apply();
  document.addEventListener("DOMContentLoaded", () => {
    apply();
    document.querySelector(".theme-toggle")?.addEventListener("click", () => {
      dark = !dark;
      try { localStorage.setItem(key, dark ? "dark" : "light"); } catch {}
      apply();
    });
  });
  window.addEventListener("storage", event => {
    if (event.key === key || event.key === null) {
      dark = event.newValue === "dark";
      apply();
    }
  });
})();`;
await writeFile(new URL("theme-static.js", output), themeScript);

const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };
let home;
for (const route of ["", "sobre", "projetos", "contato"]) {
  const response = await worker.fetch(new Request(`https://institutocuidarma.com.br/${route}`), env, context);
  assert.equal(response.status, 200, route);
  let html = await response.text();
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace(/href="\/(sobre|projetos|contato)"/g, 'href="/$1/"')
    .replace("</head>", '<script src="/theme-static.js"></script></head>');
  assert.ok(html.includes("brand__logo--dark"));
  assert.ok(html.includes("brand__logo--light"));
  assert.doesNotMatch(html, /<script[^>]+type="module"/);
  for (const asset of html.matchAll(/(?:href|src)="(\/(?:_next\/[^"?#]+|[^/"?#]+\.(?:svg|png|js)))"/g)) {
    await readFile(new URL(asset[1].slice(1), output));
  }
  const directory = new URL(route ? `${route}/` : "./", output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL("index.html", directory), html);
  if (!route) home = html;
}

const notFound = home.replace(/<title>[^<]*<\/title>/, "<title>Página não encontrada | Instituto Cuidar</title>")
  .replace(/<main\b[^>]*>[\s\S]*?<\/main>/, '<main id="conteudo" tabindex="-1"><section class="page-hero"><div class="container"><p class="eyebrow">Erro 404</p><h1>Página não encontrada.</h1><p class="page-hero__lead">O endereço pode ter mudado ou a página não está disponível.</p><a href="/" class="button button--primary">Voltar ao início</a></div></section></main>');
await writeFile(new URL("404.html", output), notFound);
console.log(`Exported and verified four pages, logos and local assets: ${fileURLToPath(output)}`);
