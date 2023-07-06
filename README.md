<h1 align="center">RocketNotes Back-End 🚀</h1>

<p align="center">
RocketNotes é uma aplicação de criação de notas personalizadas que permite adicionar links e tags para organizar suas informações de forma eficiente.
</p>

<p align="center">
  <a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> |
  <a href="#instalação">Instalação</a> |
  <a href="#configuração">Configuração</a> |
  <a href="#uso">Uso</a> |
  <a href="#deploy">Deploy</a> |
  <a href="#front-end">Front-End</a> |
  <a href="#licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## Tecnologias Utilizadas 🛠️
- Node.js
- bcryptjs
- cors
- dotenv
- express
- jsonwebtoken
- knex
- multer
- pm2
- sqlite

## Instalação ⚙️
Siga as etapas abaixo para instalar e configurar o projeto:

1. Clone o repositório: <br>
 ```
  $ git clone https://github.com/viniciuspra/API_Stage_08.git
 ```

2. Acesse o diretório do projeto:
 ```
  $ cd [DIRETÓRIO_DO_PROJETO]
 ```

3. Instale as dependências:
 ```
  $ npm install
 ```

4. Execute as migrações do banco de dados:
```
 $ npm run migrate
```

## Configuração 🔧
Antes de executar o projeto, é necessário configurar as variáveis de ambiente. Siga as etapas abaixo:

1. Renomeie o arquivo `.env.example` para `.env`.
2. Abra o arquivo `.env` e preencha as seguintes variáveis de ambiente:
- `PORT` - porta em que o servidor será executado (por exemplo, 3000).
- `AUTH_SECRET` - chave secreta para geração de tokens JWT.
  
## Uso 🚀
Para iniciar o servidor em modo de desenvolvimento, execute o seguinte comando:
```
 $ npm run dev
```
O servidor será iniciado na porta especificada no arquivo `.env`.

## Deploy 🚀
A aplicação RocketNotes Backend foi implantada no Render e está disponível no seguinte <br> 
URL: RocketNotes Deploy.

## Front-End 💻
Você pode encontrar o front-end correspondente do projeto RocketNotes no seguinte repositório: <br> 
RocketNotes Front-End.

## Licença 📄
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.
