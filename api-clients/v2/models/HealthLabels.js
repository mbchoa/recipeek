import t from 'tcomb';

const HealthLabels = t.enums({
  'Alcohol-Free': 'No alcohol used or contained in the recipe',
  'Celery-Free': 'Does not contain celery or derivatives',
  'Crustacean-Free': 'Does not contain crustaceans (shrimp, lobster etc.) or derivatives',
  'Dairy-Free':	'No dairy; no lactose',
  'Egg-Free':	'No eggs or products containing eggs',
  'Fish-Free': 'No fish or fish derivatives',
  'Gluten-Free': 'No ingredients containing gluten',
  'Kidney-Friendly': 'Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium: less than 500 mg',
  'Kosher':	'Contains only ingredients allowed by the kosher diet.However it does not guarante kosher preparation of the ingredients themselves',
  'Low-Potassium': 'Less than 150mg per serving',
  'Lupine-Free': 'Does not contain lupine or derivatives',
  'Mustard-Free':	'Does not contain mustard or derivatives',
  'Low-Fat-Abs': 'Less than 3g of fat per serving',
  'No-Oil-Added':	'No oil added except to what is contained in the basic ingredients',
  'Low-Sugar': 'No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose',
  'Paleo': 'Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils',
  'Peanut-Free': 'No peanuts or products containing peanuts',
  'Pescatarian': 'Does not cotain meat or meat based products, can cotain dairy and fish',
  'Pork-Free': 'Does not contain pork or derivatives',
  'Red-Meat-Free': 'Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat.',
  'Sesame-Free': 'Does not contain sesame seed or derivatives',
  'Shellfish-Free':	'No shellfish or shellfish derivatives',
  'Soy-Free': 'No soy or products containing soy',
  'Sugar-Conscious': 'Less than 4g of sugar per serving',
  'Tree-Nut-Free': 'No tree nuts or products containing tree nuts',
  'Vegan': 'No meat, poultry, fish, dairy, eggs or honey',
  'Vegetarian': 'No meat, poultry, or fish',
  'Wheat-Free': 'No wheat, can have gluten though',
});

export default HealthLabels;
