FROM node:latest As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

LABEL traefik.enable=true
LABEL traefik.http.routers.website.entrypoints=https
LABEL traefik.http.routers.website.rule=Host(`danielbaier.ch`)
LABEL traefik.http.routers.website.tls=true
LABEL traefik.http.services.website.loadbalancer.server.port=4200

COPY --from=builder /usr/src/app/dist/danielbaier/ /usr/share/nginx/html
