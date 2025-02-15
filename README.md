# Blog para Devs - Apiki

Este projeto é uma versão do blog da Apiki focada exclusivamente em desenvolvedores. Ele foi desenvolvido como parte de um desafio para a posição de Front-end Developer.

## Tecnologias Utilizadas

- **React** com **Vite**
- **React Router DOM** para roteamento
- **Axios** para consumo da API
- **Styled Components** para estilização

## Funcionalidades

### Página Inicial

- Exibe uma lista das últimas postagens da categoria Desenvolvimento.
- Cada postagem contém:
  - Imagem destacada
  - Título
  - Link para a postagem
- Um botão "Carregar mais..." permite carregar mais postagens paginadas.

### Página Interna do Post

- Exibe o conteúdo completo do post selecionado.
- Contém:
  - Imagem destacada
  - Título
  - Conteúdo formatado

## Instalação e Uso

1. Clone o repositório:

   ```sh
   git clone https://github.com/Isaquelins523/dev-blog.git
   ```

2. Acesse o diretório do projeto:

   ```sh
   cd DEV-BLOG
   ```

3. Instale as dependências:

   ```sh
   yarn install
   ```

4. Inicie o projeto:

   ```sh
   yarn dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:5173
   ```

## Estrutura do Projeto

```
/blog-para-devs
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── PostCard.jsx
│   │   ├── LoadMoreButton.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Post.jsx
│   ├── services
│   │   ├── api.js
│   ├── styles
│   ├── App.jsx
│   ├── main.jsx
├── package.json
├── README.md
```

## Melhorias Futuras

- Implementar testes automatizados com Jest e React Testing Library.
- Melhorar o SEO com meta tags dinâmicas.
- Implementar carregamento infinito em vez do botão "Carregar mais".
- Melhorias na acessibilidade.

## Contato

Caso tenha alguma dúvida ou sugestão, entre em contato:

- **Email**: isaquelins523@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/isaque-lins/
- **GitHub**: https://github.com/Isaquelins523/

---

Feito por Isaque Lins 🚀
