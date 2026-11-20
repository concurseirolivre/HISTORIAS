# dirleidias.com — Site do psicólogo Dirlei Junior

Site estático (HTML + CSS + JS puro), sem dependências nem build.

```
dirleidias/
├── index.html          → página principal (todas as seções)
├── assets/css/style.css → cores, fontes, animações
├── assets/js/main.js    → menu, animações de rolagem, FAQ
├── assets/img/          → fotos (webp), favicon, imagem de compartilhamento (og.jpg)
├── CNAME                → domínio dirleidias.com (GitHub Pages)
├── robots.txt / sitemap.xml → SEO
```

## Cores da identidade
| Nome | Hex |
|---|---|
| Azul-marinho | `#1D3557` |
| Verde | `#1A4331` |
| Dourado | `#CDA333` |
| Branco | `#F7F8FA` |
| Creme (fundo) | `#F2F0EB` |

Fontes: Instrument Serif (títulos), Work Sans (texto), Caveat (manuscrita).

## Como adicionar um livro / infoproduto
Na seção `id="livros"` do `index.html`, copie um bloco `<article class="product">` e altere:
- cor da capa: `book navy`, `book green` ou `book gold` (ou troque a `<div class="book">` por uma `<img>` da capa real);
- etiqueta `Em breve` → `Disponível`;
- título, descrição e o `href` do botão (link da Hotmart, Kiwify, Amazon etc.).

## Publicar com o domínio dirleidias.com
Opção recomendada (grátis): **Netlify** ou **Cloudflare Pages**
1. Crie o site apontando para este repositório e defina a pasta de publicação como `dirleidias` (sem comando de build).
2. Em *Domain settings*, adicione `dirleidias.com` e `www.dirleidias.com`.
3. No painel onde o domínio foi comprado (Registro.br, GoDaddy, Hostinger…), configure o DNS conforme indicado pelo serviço (ou aponte os nameservers para ele). O HTTPS é ativado automaticamente.

Alternativa: **GitHub Pages** — mova o conteúdo desta pasta para a raiz de um repositório próprio (ex.: `dirleidias-site`), ative Pages em *Settings → Pages*, e no DNS crie registros `A` para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` e um `CNAME` `www` → `<usuario>.github.io`.
