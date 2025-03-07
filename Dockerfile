FROM node:20.18.3

COPY . /app

WORKDIR /app

RUN npm install

RUN npm install @angular/cli -g

CMD ["ng", "serve", "—host"]
