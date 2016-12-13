# recipeek
Recipe discovery app using NLP to tag search recipe with specific food keywords.

##Overview
###Tech Stack
- React
- Node + Express
- nlp_compromise
- Webpack + Dev Server + HMR

###Front-end
- built in React
- 4 different components :
  - ``<App>`` handles event callbacks for search input and search submit, makes API request to local server and /search endpoint
  - ``<SearchBar>`` presentational component to display input form
  - ``<RecipeList>`` container component to render multiple Recipe view components
  - ``<Recipe>`` presentational component to render single recipe thumbnail image

###Back-end
- 4 controllers
  - ``searchController`` makes request to Food2Fork API to query recipes
  - ``scraperController`` fetches recipe URL pages and scrapes each page to parse
  - ``nlpController`` uses 3rd party nlp library to parse through scraped HTML page and search for specific food adjectives keywords
  - ``keywordFilterController`` parses through keywords and returns top 3 common keywords associated with recipe

##Getting Started 

1. ``npm install``
2. ``npm run start:dev`` to run local webpack dev server with HMR
3. ``npm run build`` to build production bundle files
