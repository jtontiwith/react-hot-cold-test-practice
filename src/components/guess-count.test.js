import React from 'react';

import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count'

describe('<GuessCount />', () => {
  it('Renders without fail', () => {
    shallow(<GuessCount />);
  });

  it('Renders the correct guess count', () => {
    const value = 3;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });
});