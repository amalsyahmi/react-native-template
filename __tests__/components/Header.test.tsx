import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';

import {Header} from '../../src/components/Header';

it('renders correctly', () => {
  const ui = create(<Header />).toJSON();
  expect(ui).toMatchSnapshot();
});
