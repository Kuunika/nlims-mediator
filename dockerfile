FROM node:14 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

RUN npm install -g rimraf 

RUN npm run build


FROM node:15.8.0-alpine3.10

ARG IMS_API_HOST
ARG LIMS_API_TOKEN

ENV IMS_API_HOST=$IMS_API_HOST
ENV LIMS_API_TOKEN=$LIMS_API_TOKEN

WORKDIR /app

COPY --from=builder /app ./

RUN npm install pm2 -g

CMD ["pm2-runtime","dist/main.js"]
