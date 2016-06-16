# recipeek
Superbly simple recipe discovery app using NLP to intelligently search for just the right recipe using specific food keywords.

##Overview
###Tech Stack
- React
- Node + Express
- nlp_compromise
- Cheerio
- fetch polyfill

###Front-end
- built in React
- 4 different components :
  - ``<App>`` handles event callbacks for search input and search submit, makes API request to local server and /search endpoint
  - ``<SearchBar>`` dumb component to display input form
  - ``<RecipeList>`` container component to render multiple Recipe view components
  - ``<Recipe>`` dumb component to render single recipe thumbnail image

###Back-end
- 4 controllers
  - ``searchController`` makes request to Food2Fork API to query recipes
  - ``scraperController`` fetches recipe URL pages and scrapes each page to parse
  - ``nlpController`` uses 3rd party nlp library to parse through scraped HTML page and search for specific food adjectives keywords
  - ``keywordFilterController`` parses through keywords and returns top 3 common keywords associated with recipe

##Getting Started 

1. ``npm install``
2. ``npm run watchify`` to create ``bundle.js`` file
2. ``npm start`` to start local server
3. Navigate to ``http://localhost:3000``

##Todo List
- unit tests
- user authentication

##Known Issues
- performance bottleneck when using nlp_compromise library to parse through each recipe's scraped html page
- algorithm to find keywords on recipe pages is not reliable; need a better way to gather useful keywords specific to the recipe
