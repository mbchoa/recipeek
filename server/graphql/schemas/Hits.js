export default `
  type Hits {
    q: String,
    from: Int,
    to: Int
    count: Int,
    more: Boolean,
    hits: [Hit]
  }
`;
