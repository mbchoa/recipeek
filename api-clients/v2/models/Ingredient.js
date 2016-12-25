import t from 'tcomb';

const Ingredient = t.struct({
  text: t.String,
  weight: t.Number,
});

export default Ingredient;
