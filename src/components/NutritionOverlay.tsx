import React from 'react';
import styled from 'styled-components';

import { EdamamNutrientInfo } from '../types/edamam';
import { size } from '../enums/typography';

type Props = {
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

const DISPLAYED_NUTRIENTS = ['ENERC_KCAL', 'CHOCDF', 'FAT', 'PROCNT'];

const NutritionOverlay: React.FC<Props> = ({ numServings, totalNutrients }) => (
  <Table>
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
