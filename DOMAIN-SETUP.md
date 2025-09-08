# Como Atualizar o Domínio

Quando você obtiver seu domínio final, siga estes passos para atualizar todos os links do site:

## Passo 1: Atualizar a Configuração Central
Edite o arquivo `src/config/site.ts` e altere:

```typescript
export const siteConfig = {
  // ... outras configurações
  domain: "seudominio.com.br", // ← Altere aqui
  url: "https://seudominio.com.br", // ← Altere aqui
  email: "contato@seudominio.com.br", // ← Altere aqui (se necessário)
  // ... resto da configuração
};
```

## Passo 2: Atualizar Meta Tags SEO
Edite o arquivo `index.html` e altere:

```html
<!-- Linha 6 -->
<title>Návora Inteligência Financeira - Do achismo à certeza</title>

<!-- Linha 14 -->
<meta property="og:url" content="https://seudominio.com.br" />

<!-- Linha 15 -->
<meta property="og:image" content="https://seudominio.com.br/og-image.jpg" />

<!-- Linha 16 -->
<link rel="canonical" href="https://seudominio.com.br" />
```

## ✅ O que será atualizado automaticamente:
- Todos os links de contato (WhatsApp, e-mail)
- Links das redes sociais
- Formulários de contato
- Botões de CTA
- Rodapé

## ⚠️ O que você precisa verificar manualmente:
- Meta tags no `index.html`
- Qualquer link absoluto que possa ter sido adicionado depois

## 📝 Nota:
Este sistema centralizado garante que você só precise fazer alterações em poucos lugares, em vez de procurar por todo o código.