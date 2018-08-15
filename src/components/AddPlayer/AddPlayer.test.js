import AddPlayer from './AddPlayer';
import React from 'react';
import { mount } from 'enzyme';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('should return callback onPlayerAdd with correct name', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);
    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    nameInput.value = 'Ania';
    const form = addPlayerComponent.find('form');
    form.simulate('submit');
    expect(onPlayerAdd).toBeCalledWith('Ania');
  });
