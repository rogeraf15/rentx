<h1 align="center">
    <img alt="rentx" src="./.github/logo.svg" />
    <br>
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/roger-fernandes-1488841b9/">
    <img alt="linkedin" src="https://img.shields.io/badge/-Roger%20Fernandes-8257E6?style=flat&logo=Linkedin&logoColor=white">
  </a>

  <a href="./LICENSE"> 
    <img  alt="License" src="https://img.shields.io/badge/license-MIT-8257E6">
  </a>
</p>

<h4 align="center">
  This is project develop on the NodeJS track from the <a href="https://github.com/Rocketseat/">Rocketseat </a> Ignite bootcamp.
</h4>


<p align="center">
  <a href="#ledger-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#running-starting">Starting</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>


## :ledger: About
Application to manage car rental.

## :running: Starting
Import the `./Insomnia.json` on Insomnia App.

Before starting :checkered_flag:, you need to have installed:
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)

**Clone the project and access the folder**

```bash
git clone https://github.com/rogeraf15/rentx && cd rentx
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Make a copy of 'ormconfig.example.json' to 'ormconfig.json'
# In ormconfig.json replace the values inside the "!" with the values from your .env
$ cp ormconfig.example.json ormconfig.json

# Start all the services and the application with Docker Compose
$ docker-compose up -d

# Once the services are running, run the migrations
$ yarn migration:run

# Run the seeds
$ yarn seed:run

# To finish, run the api service
$ yarn dev:server

# The server will initialize in the <http://localhost:3333>
```

## :computer: Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JSON Web Token](https://jwt.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)



## :memo: License

This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

Made with ♥ by Roger Fernandes :wave: [Get in touch!](https://www.linkedin.com/in/roger-fernandes-1488841b9/)

