import React from 'react';

import {shallow, mount} from 'enzyme';

import StatusSection from './new-section';

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection />);
  });
});