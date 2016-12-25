import t from 'tcomb';

const DietLabels = t.enums({
  'Balanced': 'Protein/Fat/Carb values in 15/35/50 ratio',
  'High-Fiber': 'More than 5g per serving',
  'High-Protein': 'More than 50% of total calories from protein',
  'Low-Carb': 'Less than 20% of total calories from carbs',
  'Low-Fat': 'Less than 15% of total calories from fat',
  'Low-Sodium': 'Less than 140mg sodium per serving',
});

export default DietLabels;
