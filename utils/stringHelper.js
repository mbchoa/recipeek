export function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function titleCase(sentence) {
  return sentence.split(' ').map(capitalize).join(' ');
}