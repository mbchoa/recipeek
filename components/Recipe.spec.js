import React from 'react';
import { shallow } from 'enzyme';

import Recipe from './Recipe';

describe('Recipe', () => {
    function renderComponent(props) {
        return shallow(
            <Recipe { ...props } />
        );
    }

    it('should render Recipe component', () => {
        expect(renderComponent({
            healthLabels: [ 'stinky', 'sour' ],
            imageUrl: 'www.stinkyfruit.com',
            name: 'stinky fruit',
            source: 'Stinky Fruit Blog',
            sourceUrl: 'www.strinkyfruit.com/source'
        })).toMatchSnapshot();
    });
});
