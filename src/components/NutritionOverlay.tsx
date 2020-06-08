import React from 'react';
import styled from 'styled-components';

import { EdamamNutrientInfo } from '../types/edamam';
import { size } from '../enums/typography';

type Props = {
  calories: number;
  numServings: number;
  // TODO: getting an error when this is typed as EdamamNutrientMap
  totalNutrients: any;
};

const Table = styled.table`
  color: white;
  font-size: ${size['giga']}
  margin: 0 auto;
  text-shadow: 1px 1px 2px black;
  width: calc(100% * 2 / 3);
`;

const DISPLAYED_NUTRIENTS = ['CHOCDF', 'FAT', 'PROCNT'];

const NutritionOverlay: React.FC<Props> = ({
  calories,
  numServings,
  totalNutrients
}) => (
  <Table>
    <tr>
      <td>Calories</td>
      <td>{Math.round(calories)}</td>
    </tr>
    {DISPLAYED_NUTRIENTS.map(nutrientCode => {
      const { label, quantity, unit } = totalNutrients[
        nutrientCode
      ] as EdamamNutrientInfo;
      return (
        <tr key={nutrientCode}>
          <td>{label}</td>
          <td>
            {Math.round(quantity / numServings)}
            {unit}
          </td>
        </tr>
      );
    })}
    <tr>
      <td>Servings</td>
      <td>{numServings}</td>
    </tr>
  </Table>
);

export default NutritionOverlay;
