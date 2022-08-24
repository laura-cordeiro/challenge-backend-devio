

# Challenge Fast Food | Back-end - Devio </h1>

Projeto de API para gerir os pedidos dos clientes de um restaurante fast-food. 

### 🔧 Instalação

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

1°. Faça um clone do repositório
```
git clone git@github.com:laura-cordeiro/challenge-backend-devio.git
```
2°. Instale os pacotes NPM utilizados no projeto
```
npm i
```
3°. Duplique o arquivo .env.example, renomeie para .env. e insira suas informações (banco de dados utilizado: mysql)
```
DB_USER = usuário
DB_PASS = senha para acessar o banco de dados
DB_NAME = nome do banco de dados
DB_HOST = localhost ou servidor online
DB_PORT = porta
```
4°. Crie o banco de dados
```
npx sequelize-cli db:create
```
6°. Crie as tabelas e popule o banco de dados
```
npm run setup:dev
```
7°. Inicie o servidor
```
npm run dev
```
Os testes podem ser feitos no Postman, seguindo a documentação abaixo.

## :page_with_curl: Documentação

Você pode acessar a documentação da API [aqui.](https://documenter.getpostman.com/view/21580138/VUqsqb1B)

## 🛠️ Construído com
Esse projeto foi desenvolvido com as seguintes tecnologias:

![Typescript](https://img.shields.io/badge/-Typescript-red) ![JavaScript](https://img.shields.io/badge/-JavaScipt-yellow) ![NodeJS](https://img.shields.io/badge/-NODE.JS-brightgreen) ![MySQL](https://img.shields.io/badge/-MySQL-blue) ![Express](https://img.shields.io/badge/-Express-purple) ![Sequelize](https://img.shields.io/badge/-Sequelize-brown)
