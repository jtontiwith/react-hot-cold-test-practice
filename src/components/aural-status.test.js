import React from 'react';

import {shallow, mount} from 'enzyme';

import AuralStatus from './aural-status.js';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });
});
