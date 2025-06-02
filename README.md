# Versed Accounting – Site Institucional

Este repositório contém o código-fonte do site institucional da Versed Accounting, desenvolvido com foco em desempenho, escalabilidade e boas práticas modernas de desenvolvimento web.

## 🔧 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) – Ferramenta de build rápida para projetos front-end
- [Tailwind CSS](https://tailwindcss.com/) – Framework utilitário para estilos
- [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript com tipagem estática
- [PostCSS](https://postcss.org/) – Ferramenta para transformação de CSS com plugins
- [ESLint](https://eslint.org/) – Ferramenta de linting para manter a qualidade do código

## 📁 Estrutura do Projeto

```

.
├── public/             # Arquivos públicos (imagens, favicon, etc.)
├── src/                # Código-fonte principal
│   ├── assets/         # Recursos estáticos (imagens, fontes)
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas do site
│   └── main.ts         # Arquivo de entrada da aplicação
├── index.html          # Arquivo HTML principal
├── tailwind.config.js  # Configuração do Tailwind CSS
├── vite.config.ts      # Configuração do Vite
├── package.json        # Dependências e scripts do projeto
└── tsconfig.json       # Configuração do TypeScript
```

## 🚀 Como Executar Localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/versedaccounting/versedacc.git
   cd versedacc
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

O site estará disponível em `http://localhost:5173/` por padrão.

## 🧪 Scripts Disponíveis

- `:contentReference[oaicite:32]{index=32}` – Inicia o servidor de desenvolvimento
- `:contentReference[oaicite:38]{index=38}` – Gera a versão otimizada para produção
- `:contentReference[oaicite:44]{index=44}` – Executa o ESLint para análise de código([DEV Community][1])

## 📦 Deploy

O projeto pode ser facilmente implantado em plataformas como [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) ou [GitHub Pages](https://pages.github.com/). Basta configurar o diretório de saída (`dist/`) como a pasta pública.

## 🤝 Contribuição

Contribuições são bem-vindas! Se você deseja melhorar algo ou corrigir um problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).