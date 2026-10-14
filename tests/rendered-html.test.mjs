import assert from "node:assert/strict";
import test from "node:test";
const { default: worker } = await import("../dist/server/index.js");
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };
for (const [path, heading] of [["/", "Projetos culturais que acolhem"], ["/sobre", "Uma instituição que usa a cultura"], ["/projetos", "Cada projeto é uma forma"], ["/contato", "Vamos construir novas oportunidades"]]) {
 test("renders institutional page " + path, async () => {
 const response = await worker.fetch(new Request("http://localhost" + path, { headers: { accept: "text/html" } }), env, context);
 assert.equal(response.status, 200);
 assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
 const html = await response.text();
 assert.match(html, /<html[^>]*lang="pt-BR"/);
 assert.ok(html.includes(heading));
 assert.match(html, /<title>[^<]*Instituto Cuidar/);
 assert.equal((html.match(/<main\b/g) ?? []).length, 1);
 assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
 assert.match(html, /href="#conteudo"/);
 assert.ok(html.includes("mailto:contato@institutocuidarma.com.br"));
 assert.ok(html.includes("tel:+5598987359398"));
 for (const href of ["/", "/sobre", "/projetos", "/contato"]) assert.ok(html.includes('href="' + href + '"'));
 assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
 });
}
test("unknown pages return 404", async () => {
 const response = await worker.fetch(new Request("http://localhost/página-inexistente"), env, context);
 assert.equal(response.status, 404);
});
