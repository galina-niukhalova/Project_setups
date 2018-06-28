import React from 'react';
import { mount } from 'enzyme';

import App from '../containers/App';

function setup(props) {
    const actions = {
        // name: jest.fn()
    }

    const component = mount(
        <App {...actions} />
    )

    return {
        child: component.find('div')
    }
}


describe('App component', () => {
    let props;

    beforeEach(() => {
        props = {
        }
    });

    it('example', () => {
        const { child } = setup(props);

        expect(child.length).toEqual(1);
    })
});
