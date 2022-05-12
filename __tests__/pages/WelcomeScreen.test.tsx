import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';

import {WelcomeScreen} from '../../src/pages/welcome-screen';

const mockedNavigation = jest.fn();

jest.mock('@react-navigation/core', () => {
  const actualNav = jest.requireActual('@react-navigation/core');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigation,
      dispatch: jest.fn(),
    }),
  };
});

describe('WelcomeScreen page', () => {
  beforeEach(() => {
    mockedNavigation.mockClear();
  });

  it('renders correctly', () => {
    const ui = create(<WelcomeScreen />).toJSON();
    expect(ui).toMatchSnapshot();
  });
});
