# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Comandos

```bash
npm run dev     # servidor de desenvolvimento (localhost:3000)
npm run build   # build de produção
npm run lint    # ESLint
```

Não há testes configurados.

## O que é este projeto

Portfólio pessoal de Rafael Luna de Souza: site estático de **página única** (`/`) em **português formal**, com seções ancoradas (Hero, Sobre, Experiência, Projetos, Skills, Contato). `REQUIREMENTS.md` é a fonte de verdade para escopo, público-alvo e o que está fora de escopo (sem blog, sem CMS, sem formulário com backend, sem toggle PT/EN).

**Restrição importante:** `git commit/push` e deploy exigem confirmação explícita do usuário — não execute por conta própria.

## Arquitetura

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + next-themes.

**Separação conteúdo/apresentação** — todo o conteúdo do site vive em `data/*.ts` (`profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`) como objetos tipados `as const`. Alterações de texto/conteúdo acontecem ali, não nos componentes. Constantes do site (URL, título, descrição) ficam em `lib/site.ts`.

**Composição da página** — `app/page.tsx` (Server Component) apenas monta os componentes de `components/sections/`. As seções são Client Components (`"use client"`) por causa do Framer Motion. `app/layout.tsx` concentra o SEO: metadata, fontes (Inter → `--font-sans`, Space Grotesk → `--font-heading`) e JSON-LD `Person` gerado a partir de `data/profile.ts`. SEO complementar em `app/sitemap.ts`, `app/robots.ts` e `app/opengraph-image.tsx`.

**Estilo** — Tailwind v4 sem `tailwind.config`: a configuração é CSS-first em `app/globals.css`. Tokens semânticos (`--background`, `--accent`, `--card`, etc.) são definidos em `:root` e `.dark`, e expostos ao Tailwind via `@theme inline` (ex.: `bg-accent`, `text-muted-foreground`). Dark mode por classe via next-themes (`@custom-variant dark`). Use `cn()` de `lib/utils.ts` para compor classes.

**Animações** — variants compartilhadas em `lib/motion-variants.ts` (`fadeInUp`, `fadeIn`, `staggerContainer`); as seções animam na entrada em viewport com `whileInView`. Todo componente animado deve respeitar `useReducedMotion()` (renderizar sem animação quando ativo) — requisito de acessibilidade WCAG AA do projeto.
