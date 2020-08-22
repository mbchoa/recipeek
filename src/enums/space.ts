const spacingUnit = 4;

type Space = {
  'sp-4': string;
  'sp-8': string;
  'sp-12': string;
  'sp-16': string;
  'sp-20': string;
  'sp-24': string;
  'sp-28': string;
  'sp-32': string;
  'sp-36': string;
  'sp-48': string;
  'sp-64': string;
};

/**
 * Creates a mapping of 'sp-X' units starting from the single 4px spacing up to 64px.
 */
export default [...Array(9).keys()].reduce(
  (output, index) => ({
    ...output,
    [`sp-${(index + 1) * spacingUnit}`]: `${(index + 1) * spacingUnit}px`
  }),
  {
    'sp-48': '48px',
    'sp-64': '64px'
  }
) as Space;
