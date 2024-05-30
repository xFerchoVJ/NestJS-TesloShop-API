<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Teslo API

## Installation

```bash
$ npm install
```

## Configure your enviroment variables
- Use the .env.template file to configure your environment variables

## Run the DB container
```bash
$ docker compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## Execute SEED
 **Method: GET**
```bash
http://localhost:3000/api/seed
```

## License

Nest is [MIT licensed](LICENSE).
