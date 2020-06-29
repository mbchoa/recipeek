# recipeek [![Netlify Status](https://api.netlify.com/api/v1/badges/28f46ad0-bcba-4979-a39e-4d005b9718a1/deploy-status)](https://app.netlify.com/sites/recipeeek/deploys)
Simple recipe discovery app using [Edamam Recipe Search API](https://developer.edamam.com/).

## Overview

This is a React application scaffolded from a create-react-app template. It displays a single input field to query recipes based on ingredients provided by the user. Under the hood, the client application communicates with a Netlify Lambda function which handles the API request to the 3rd party Edamam recipe search endpoint.


## Requirements

### Netlify
You will need to have the `netlify-cli` installed in order to run the `ntl dev` command below. You'll need to install the CLI globally

```bash
npm install -g netlify-cli
``` 

### Edamam API Keys
You will also need to obtain your own set of API `app_id` and `app_key` from the Edamam developer portal. You can place them in a `.env` file at the root folder like so:

```
REACT_APP_RECIPEEK_APP_ID=yourappid
REACT_APP_RECIPEEK_APP_KEY=yourappkey
```

### Redis
The Netlify Lambda function connects to a remote Redis server living on a Digital Ocean droplet as a container. To run locally, you can spin up a Redis container from the [Dockerfile](docker/redis/Dockerfile) provided. You will need to include the following environment variables in an `.env` file in order for the Node Redis client to connect:

```
REACT_APP_REDIS_HOST=localhost
REACT_APP_REDIS_PORT=6379 (or whichever port you map on your host)
REACT_APP_REDIS_PASSWORD=somepassword (this is defined in the redis.conf file)
```

## Development

1. ``yarn install``
2. ``ntl dev`` to startup local Netlify [development server](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)
3. Navigate to http://localhost:8888

## Roadmap

Future project feature updates and fixes can be found on the Trello Kanban [board](https://trello.com/b/YtfNLGC4/recipeek).
