module.exports = `
  type Query {
    fetchRecipes(ingredient: String!): Hits
  }
`;
