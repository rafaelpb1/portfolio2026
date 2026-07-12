# Requisitos — Portfólio Pessoal de Rafael Luna de Souza

## Objetivo

Site pessoal para apresentar Rafael Luna de Souza (estudante de Ciência da Computação, estagiário de TI) a recrutadores técnicos, outros desenvolvedores e ao público geral. Deve comunicar competência técnica, projetos reais e forma de contato de maneira moderna e direta.

## Público-alvo

1. Recrutadores técnicos — precisam encontrar rapidamente: quem é, o que sabe, o que já fez, como contatar, CV.
2. Outros desenvolvedores — avaliam qualidade de código/projetos via GitHub.
3. Público geral — precisa entender a proposta em segundos (hero claro).

## Escopo (nesta fase)

- Site estático em português formal, uma única página (`/`) com seções ancoradas.
- Seções: Header, Hero, Sobre (bento grid), Experiência, Projetos, Skills, Certificações, Contato, Footer.
- Tema claro/escuro com toggle.
- Botão de download do CV em PDF.
- Contato via links diretos: WhatsApp (mensagem pré-definida), e-mail (mailto), GitHub, LinkedIn.
- Dados de projetos isolados em arquivo editável (`data/projects.ts`) — serão refinados quando o usuário enviar mais detalhes (links de repositório + explicação de cada projeto).
- SEO básico (metadata, sitemap, robots, JSON-LD Person) e acessibilidade (WCAG AA).
- Deploy: Vercel, domínio `souza-rafael.vercel.app` (o domínio original planejado, `rafael-luna-dev.vercel.app`, está ocupado por um portfólio antigo em outra conta Vercel).

## Fora de escopo (nesta fase)

- Toggle de idioma PT/EN (site fica só em PT, escrito de forma clara para facilitar tradução manual futura).
- Formulário de contato com backend/e-mail transacional.
- CMS ou painel administrativo.
- Blog.
- `git init`/commit/push e deploy real — requerem confirmação explícita do usuário antes de executar.

## Stack Técnica

- Next.js (App Router) + TypeScript
- Tailwind CSS (tokens semânticos via CSS variables)
- Framer Motion (`motion`) para animações
- `next-themes` para dark mode
- `lucide-react` para ícones
- `@vercel/analytics`

## Fontes de Conteúdo

- CV: `/Users/souza/Documents/Rafael_Luna_de_Souza_CV.pdf`
- GitHub: [github.com/rafaelpb1](https://github.com/rafaelpb1)
- LinkedIn: [linkedin.com/in/rafaellunapb1](https://www.linkedin.com/in/rafaellunapb1/)
- Foto: `/Users/souza/Documents/IMG_0335.jpg`
