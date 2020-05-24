# recipeek [![Netlify Status](https://api.netlify.com/api/v1/badges/28f46ad0-bcba-4979-a39e-4d005b9718a1/deploy-status)](https://app.netlify.com/sites/recipeeek/deploys)
Simple recipe discovery app using [Edamam Recipe Search API](https://developer.edamam.com/).

## Overview

This is a React application scaffolded from a create-react-app template. It displays a single input field to query recipes based on ingredients provided by the user. Under the hood, the client application communicates with a Netlify Lambda function which handles the API request to the 3rd party Edamam recipe search endpoint.


## Requirements

You will need to have the `netlify-cli` installed in order to run the `ntl dev` command below.

You will also need to obtain your own set of API `app_id` and `app_key` from the Edamam developer portal. You can place them in a `.env` file at the root folder like so:

```
REACT_APP_RECIPEEK_APP_ID=yourappid
REACT_APP_RECIPEEK_APP_KEY=yourappkey
```

## Development

1. ``yarn install``
2. ``ntl dev`` to startup local Netlify [development server](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md)

## Roadmap

Future project feature updates and fixes can be found on the Trello Kanban [board](https://trello.com/b/YtfNLGC4/recipeek).
