# Fastify Package Setup

```sh
npm install fastify
npm install nodemon --save-dev
npm i fastify-swagger --save
npm i bcrypt --save
```

<p>Jika nodemon error hapus file</p>

<p>C:\Users\foxzo\AppData\Roaming\npm\nodemon.ps1</p>

<br/>

## Database ORM with Sequelize

```sh
npm install --save sequelize
npm install --save-dev sequelize-cli
npx sequelize-cli init
npm install --save mysql2
```

<br/>

## Create Model

```sh
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate:undo:all
```
