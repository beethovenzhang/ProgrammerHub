# ProgrammerHub

> A social network for programmers

This is a small social network app developed with the MERN stack that includes authentication, profiles and forum posts.

Hosted on Heroku [link](http://www.theprogrammerhub.com/)

## Quick Start

Note: the MongoDB Atlas was used for the database for ease of deployment on Heroku

```
# change default.json file in config folder

# this file is located in config/default.json

# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/dev-social",

```

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

## App Info

### Author

Yunfei Zhang

### Version

1.0

### License

This project is licensed under the MIT License
