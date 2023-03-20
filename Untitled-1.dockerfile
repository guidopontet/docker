# Wolrd DB
docker container run \
  -dp 3306:3306 \
  --name world-db \
  --env MARIADB_USER=example-user \
  --env MARIADB_PASSWORD=user-password \
  --env MARIADB_ROOT_PASSWORD=root-secret-password \
  --env MARIADB_DATABASE=world-db \
  --volume world-db:/var/lib/mysql \
  --network world-app \
  mariadb:jammy

# phpmyadmin
docker container run \
  --name phpmyadmin \
  -d \
  -e PMA_ARBITRARY=1 \
  -p 8080:80 \
  --network world-app \
  phpmyadmin:5.2.0-apache

# Nest app
docker container run \
  --name nest-app \
  -w /app \
  -dp 8080:3000 \
  -v "$(pwd)":/app \
  node:18-alpine3.17  \
  sh -c 'yarn install && yarn start:dev'


# Postgres
docker container run \
  -d \
  --name postgres-db \
  -e POSTGRES_PASSWORD=123456 \
  -v postgres-db:/var/lib/postgresql/data \
  postgres:15.1

# PgAdmin
docker container run \
  --name pgAdmin \
  -e PGADMIN_DEFAULT_PASSWORD=123456 \
  -e PGADMIN_DEFAULT_EMAIL=superman@google.com \
  -dp 8080:80 \
  dpage/pgadmin4:6.17
