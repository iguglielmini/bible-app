# 📖 Bible App - Backend

Backend do projeto **Bible App**, desenvolvido com [NestJS](https://nestjs.com/). Esta API fornece endpoints para acesso e gerenciamento de conteúdo bíblico, como livros, capítulos, versículos, usuários, favoritos, anotações e funcionalidades de autenticação.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/) (ou outro banco de dados via TypeORM)
- [JWT](https://jwt.io/) para autenticação
- [Docker](https://www.docker.com/) (opcional)

---

## 📁 Estrutura de Pastas

src/ 
├── auth/ # Módulo de autenticação (login, registro, JWT) 
├── bannerIntro/ # Banner de intro
├── users/ # Gerenciamento de usuários 
├── Sermon/ # Sermoes
└── app.module.ts # Módulo principal

## ⚙️ Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3333

JWT_SECRET=Ch^C!28wT83@d%kP9#f!LxmBz7s*NvMq

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=17a105314a
DB_NAME=bible
```` 

## 🛡️ Autenticação

A autenticação é baseada em JWT. Após login ou registro, um token será retornado e deverá ser enviado no header:

```
Authorization: Bearer <token>
``` 

##  Rodar o projeto

### Instala as dependências

```
npm install
```

### Iniciar o servidor em modo de dev

```
npm run start:dev
```

### Compila o projeto

```
npm run build
```

🧱 Contribuição
Fork este repositório

Crie uma branch: git checkout -b minha-feature

Faça commit das suas alterações: git commit -m 'feat: minha nova feature'

Push para o repositório remoto: git push origin minha-feature

Abra um Pull Request

📌 Licença
Este projeto está licenciado sob a MIT License.