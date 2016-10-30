import { capitalize } from 'lodash';

export function titleCase(sentence) {
  return sentence.split(' ').map(capitalize).join(' ');
}