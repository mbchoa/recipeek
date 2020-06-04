export type EdamamDietLabel = string;

export type EdamamIngredient = {
  text: string;
  weight: number;
};

export enum NutrientCode {
  CA = 'Calcium',
  CHOCDF = 'Carbs',
  CHOLE = 'Cholesterol',
  ENERC_KCAL = 'Energy',
  FAMS = 'Monounsaturated',
  FAPU = 'Polyunsaturated',
  FASAT = 'Saturated',
  FAT = 'Fat',
  FATRN = 'Trans',
  FE = 'Iron',
  FIBTG = 'Fiber',
  FOLAC = 'Folic acid',
  FOLDFE = 'Folate (Equivalent)',
  FOLFD = 'Folate (food)',
  K = 'Potassium',
  MG = 'Magnesium',
  NA = 'Sodium',
  NIA = 'Niacin (B3)',
  P = 'Phosphorous',
  PROCNT = 'Protein',
  RIBF = 'Riboflavin (B2)',
  SUGAR = 'Saturated',
  'SUGAR.added' = 'Sugars, added',
  THIA = 'Thiamin (B1)',
  TOCPHA = 'Vitamin E',
  VITA_RAE = 'Vitamin A',
  VITB12 = 'Vitamin B12',
  VITB6A = 'Vitamin B6',
  VITC = 'Vitamin C',
  VITD = 'Vitamin D',
  VITK1 = 'Viatmin K',
  WATER = 'Water',
  ZN = 'Zinc'
}

export type EdamamNutrientInfo = {
  label: string;
  quantity: number;
  unit: string;
};

export type EdamamNutrientMap = {
  CA?: EdamamNutrientInfo;
  CHOCDF?: EdamamNutrientInfo;
  CHOLE?: EdamamNutrientInfo;
  ENERC_KCAL?: EdamamNutrientInfo;
  FAMS?: EdamamNutrientInfo;
  FAPU?: EdamamNutrientInfo;
  FASAT?: EdamamNutrientInfo;
  FAT?: EdamamNutrientInfo;
  FE?: EdamamNutrientInfo;
  FIBTG?: EdamamNutrientInfo;
  FATRN?: EdamamNutrientInfo;
  FOLDFE?: EdamamNutrientInfo;
  FOLFD?: EdamamNutrientInfo;
  K?: EdamamNutrientInfo;
  MG?: EdamamNutrientInfo;
  NA?: EdamamNutrientInfo;
  NIA?: EdamamNutrientInfo;
  P?: EdamamNutrientInfo;
  PROCNT?: EdamamNutrientInfo;
  RIBF?: EdamamNutrientInfo;
  SUGAR?: EdamamNutrientInfo;
  'SUGAR.added'?: EdamamNutrientInfo;
  THIA?: EdamamNutrientInfo;
  TOCPHA?: EdamamNutrientInfo;
  VITA_RAE?: EdamamNutrientInfo;
  VITB12?: EdamamNutrientInfo;
  VITB6A?: EdamamNutrientInfo;
  VITC?: EdamamNutrientInfo;
  VITD?: EdamamNutrientInfo;
  VITK1?: EdamamNutrientInfo;
  WATER?: EdamamNutrientInfo;
  ZN?: EdamamNutrientInfo;
};

export type EdamamRecipe = {
  calories: number;
  dietLabels: EdamamDietLabel[];
  id: string;
  image: string;
  ingredients: EdamamIngredient[];
  ingredientLines: string[];
  label: string;
  source: string;
  totalNutrients: EdamamNutrientMap;
  totalWeight: number;
  totalTime: number;
  uri: string;
  url: string;
  yield: Number;
};

export type EdamamHit = {
  recipe: EdamamRecipe;
};
