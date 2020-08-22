export type Theme = {
  body: string;
  buttonBgColor: string;
  buttonBorder: string;
  primary: string;
  secondary: string;
  transition: string;
};

export const lightTheme: Theme = {
  body: '#fff',
  buttonBgColor: '#113f67',
  buttonBorder: '2px solid #113f67',
  primary: '#113f67',
  secondary: '#fff',
  transition: 'all 0.15s linear'
};

export const darkTheme: Theme = {
  body: '#113f67',
  buttonBgColor: 'transparent',
  buttonBorder: '2px solid #fff',
  primary: '#fff',
  secondary: '#113f67',
  transition: 'all 0.15s linear'
};
