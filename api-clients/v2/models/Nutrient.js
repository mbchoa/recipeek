import t from 'tcomb';

const Nutrient = t.struct({
  label: t.String,
  quantity: t.Number,
  unit: t.String,
});

export default Nutrient;
