# Instituto Cuidar

Site institucional com páginas de início, sobre, projetos e contato. Desenvolvido com React, TypeScript e vinext, com execução em Cloudflare Workers.

## Executar localmente

Use Node.js 24 LTS e npm. Os comandos funcionam em Windows, Linux e macOS.

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo servidor. Para produção:

```sh
npm run build
npm start
```

## Verificar alterações

- `npm run lint`: análise estática e regras de acessibilidade.
- `npm run typecheck`: verificação de tipos TypeScript.
- `npm test`: build e testes da renderização das quatro páginas e resposta 404.
- `npm run check`: todas as verificações acima.

O GitHub Actions executa essas verificações em pushes e pull requests. Os testes usam o Worker compilado e verificam conteúdo, navegação, idioma, títulos e estrutura semântica; não substituem a inspeção visual em navegador.

## Organização

- `app/`: páginas, layout e estilos globais.
- `app/components/SiteShell.tsx`: cabeçalho, navegação, conteúdo principal e rodapé.
- `app/site-data.ts`: conteúdo compartilhado, projetos e contato.
- `public/`: logo, favicon e imagem para compartilhamento.
- `worker/index.ts`: entrada do Cloudflare Worker e otimização de imagens.
- `tests/`: testes de integração da renderização.
- `.openai/hosting.json`: configuração existente de hospedagem e bindings opcionais.

## Recursos opcionais

O site atual é público e não utiliza banco de dados nem autenticação. `db/`, `drizzle/`, `examples/d1/` e `app/chatgpt-auth.ts` são recursos opcionais do starter, preservados para integrações futuras. D1 exige configurar o binding DB antes de usar `getDb()`. `npm run db:generate` gera migrações após alterações no schema.

A configuração Vite mantém o estado de desenvolvimento do Cloudflare em `.wrangler/`, ignorado pelo Git. Não coloque credenciais no código; arquivos `.env*` também são ignorados.

## Manutenção

Use npm e `package-lock.json` como referência para instalação e CI. O lockfile pnpm original está preservado, mas não é usado pelas verificações. Atualizações de dependências devem ser acompanhadas de `npm run check`. A versão atual do vinext é beta; valide atualizações e a execução na hospedagem antes de publicar.
