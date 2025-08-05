# WebApp backend


## Project setup

```bash
$ pnpm install
```

## Develop steps
1. Paso 1
2. Paso 2 


## Nestjs commands




## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```


## To use Docker
```bash
$ docker build -t nestjs-appp

$ docker run --rm -p 3000:3000 nestjs-app
```

## To use Prisma
```bash
# init prisma database
$ npx prisma init

# command for clients database


# make migrations
# $ npx prisma migrate dev --name init
$ npx prisma migrate dev --name "Message for migration"

# to add data to database from script
$ npx prisma db seed
# to work this fine yo have to do it
$ npm install tsx
# and in the script on the prisma object
 "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
```

## NestJs Commnands

```bash
$ npx nest module prisma
$ npx nest service prisma
$ npx nest generate resource

```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.
