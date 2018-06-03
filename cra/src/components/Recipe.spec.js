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
            image: 'www.stinkyfruit.com',
            label: 'stinky fruit',
            source: 'Stinky Fruit Blog',
            url: 'www.strinkyfruit.com/source'
        })).toMatchSnapshot();
    });
});
