import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without fail', () => {
    shallow(<GuessForm />);
  });

  it('Renders button with id of guessButton', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.hasClass('text')).toEqual(true);
  });
});