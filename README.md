# CraftSync (Under Development)
A back-end for your Minecraft Server written in TypeScript.

## Description
<p>CraftSync does all the database heavy-lifting behind the scenes so that your Minecraft Server can run smoothly.</p>

## Setup
To run this project, install it locally using npm:
```
$ cd ../path-to-project
$ npm install
$ npm run build
$ npm run dev
```

## Java-HTTP
All though there are many ways to make HTTP requests in Java, I recommend using [this](https://github.com/Kong/unirest-java).

## Endpoints
- **POST** `/chat/filter` -> returns a clean version of the message
