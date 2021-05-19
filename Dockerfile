FROM debian
RUN apt-get update && apt-get upgrade -y
RUN apt-get install nodejs npm -y
COPY . /app
WORKDIR /app
EXPOSE 3000
ENV MONGO_DB 127.0.0.1
CMD node app.js
