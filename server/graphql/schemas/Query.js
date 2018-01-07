module.exports = `
  type Query {
    recipes(ingredient: String!): Hits
  }
`;
