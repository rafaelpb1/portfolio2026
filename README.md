<div align="center">

# Portfólio — Rafael Luna de Souza

**Site pessoal de página única para apresentar quem eu sou, o que já construí e como falar comigo.**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

🔗 Deploy alvo: [`rafael-luna-dev.vercel.app`](https://rafael-luna-dev.vercel.app)

</div>

---

## ✨ Sobre o projeto

Este é o meu portfólio pessoal: um site estático, em português, pensado para três públicos —
**recrutadores técnicos** (quem sou, o que sei, o que já fiz, CV para download), **desenvolvedores**
(qualidade de código e projetos no GitHub) e o **público geral** (entender a proposta em segundos).

Tudo acontece em uma única página com navegação por âncoras:

| Seção | O que mostra |
| --- | --- |
| **Hero** | Apresentação direta, tagline e chamadas para contato/CV |
| **Sobre** | Bio, formação, idiomas e destaques em um bento grid |
| **Experiência** | Trajetória profissional em linha do tempo |
| **Projetos** | Projetos reais com links para os repositórios |
| **Skills & Certificações** | Tecnologias do dia a dia e cursos complementares |
| **Contato** | WhatsApp com mensagem pré-definida, e-mail, GitHub e LinkedIn |

O site tem **tema claro/escuro**, animações suaves de entrada e **download do CV em PDF**.

## 🛠️ Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** — tokens semânticos via CSS variables, sem `tailwind.config`
- **[Framer Motion](https://www.framer.com/motion/)** — animações com respeito a `prefers-reduced-motion`
- **[next-themes](https://github.com/pacocoursey/next-themes)** — dark mode sem flash de tema
- **[lucide-react](https://lucide.dev)** — ícones
- **[@vercel/analytics](https://vercel.com/analytics)** — métricas de acesso

## 🚀 Rodando localmente

Pré-requisito: **Node.js 20+**

```bash
git clone <url-do-repositório>
cd portfolio2026
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

Outros comandos:

```bash
npm run build   # build de produção
npm run lint    # verificação com ESLint
```

## 📁 Estrutura

```
app/            # rotas, layout, SEO (metadata, sitemap, robots, OG image)
components/
  layout/       # header e footer
  sections/     # uma pasta por seção da página (hero, sobre, projetos...)
  ui/           # peças reutilizáveis (botão, card, badge, section-heading)
data/           # TODO o conteúdo do site (perfil, experiência, projetos, skills)
lib/            # constantes do site, utilitários e variants de animação
public/         # imagens e CV em PDF
```

## ✏️ Editando o conteúdo

O conteúdo é totalmente separado da apresentação: para atualizar textos, projetos ou
experiências, basta editar os arquivos tipados em **`data/`** (`profile.ts`, `experience.ts`,
`projects.ts`, `skills.ts`) e as constantes em **`lib/site.ts`** — nenhum componente precisa mudar.

## ♿ Acessibilidade & SEO

- Contraste e navegação por teclado seguindo **WCAG AA**, com link "pular para o conteúdo"
- Animações desativadas automaticamente para quem usa `prefers-reduced-motion`
- Metadata completa, **JSON-LD (Person)**, `sitemap.xml`, `robots.txt` e imagem Open Graph geradas pelo App Router

## 📬 Contato

- GitHub: [@rafaelpb1](https://github.com/rafaelpb1)
- LinkedIn: [rafaellunapb1](https://www.linkedin.com/in/rafaellunapb1/)
