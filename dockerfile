FROM node:14-alpine3.16 AS Build

COPY . /app
WORKDIR /app

RUN npm install
RUN npm run build --prod

FROM nginx:latest AS ngi

COPY --from=build /dist/src/app/dist/inmind-project /usr/share/nginx/html

EXPOSE 80