FROM ubuntu:20.04

RUN apt-get update

RUN apt-get install -y \
    curl git

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get install -y \
    nodejs \
    build-essential

RUN npm install -g @angular/cli@9.0.7 
