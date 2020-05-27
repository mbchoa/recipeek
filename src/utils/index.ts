export const titleCase = (input: string) =>
  input
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
