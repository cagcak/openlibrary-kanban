# OpenlibraryKanban

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development server (localhost)

```shell
npm run start
```

```shell
yarn start
```

> URL: <http://localhost:4200>

Following contains dockerizing processes. Follow the pattern in order described in below:

1- build docker container
2- run docker container
3- browse on 8080 port in browser

## Development server (container)

```shell
docker build --build-arg configuration=development -t frontend/openlibrary-kanban-app-image:latest .
```

> URL: <http://localhost:8080>

## Build (localhost)

### production

```shell
npm run build:prod
```

```shell
yarn build:prod
```

### staging

```shell
npm run build:staging
```

```shell
yarn build:staging
```

## Build (container)

### production

```shell
docker build --build-arg configuration=production -t frontend/openlibrary-kanban-app-image:latest .
```

### staging

```shell
docker build --build-arg configuration=staging -t frontend/openlibrary-kanban-app-image:latest .
```

> Possible docker container image size: ~140MB

## Running built containers

You can run the container(s) you built by the following command:

```shell
docker run -d --name openlibrary_kanban -p 8080:80 frontend/openlibrary-kanban-app-image:latest
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
