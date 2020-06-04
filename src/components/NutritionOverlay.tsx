import React from 'react';
import styled from 'styled-components';

import { EdamamNutrientInfo, EdamamNutrientMap } from '../types/edamam';

type Props = {
  // TODO: getting an error when this is typed as EdamamNutrientMap
  totalNutrients: any;
};

const Table = styled.table`
  width: 100%;
`;

const DISPLAYED_NUTRIENTS = ['CHOCDF', 'FAT', 'PROCNT'];

const NutritionOverlay: React.FC<Props> = ({ totalNutrients }) => (
  <Table>
    {DISPLAYED_NUTRIENTS.map(nutrientCode => {
      const { label, quantity, unit } = totalNutrients[
        nutrientCode
      ] as EdamamNutrientInfo;
      return (
        <tr key={nutrientCode}>
          <td>{label}</td>
          <td>
            {Math.round(quantity)}
            {unit}
          </td>
        </tr>
      );
    })}
  </Table>
);

export default NutritionOverlay;
