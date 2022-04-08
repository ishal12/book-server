# Book-Server

Simple CRUD with Oauth

## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

## Install

    $ git clone https://github.com/ishal12/book-server
    $ cd book-server
    $ npm install

## Configure app

create `book-server/.env` then edit it with your settings. For test purpose you can use `.env.example` settings. You will need:

- ISSUER_BASE_URL
- CLIENT_ID
- CLIENT_SECRET
- BASE_URL
- AUDIENCE
- ISSUER
- API_PORT
- MONGODB_URL

## Running the project

    $ npm start