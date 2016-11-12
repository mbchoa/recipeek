import t from 'tcomb';

const Ingredient = t.struct({
  food: t.String,
  measure: t.String,
  quantity: t.Number,
  text: t.String,
});

export default Ingredient;
