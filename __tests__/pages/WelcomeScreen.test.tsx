import 'react-native';
import React from 'react';
import {WelcomeScreen} from '../../src/pages/welcome-screen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

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

describe('Testing Welcome Screen', () => {
  beforeEach(() => {
    mockedNavigation.mockClear();
  });

  it('renders correctly', () => {
    renderer.create(<WelcomeScreen />);
  });
});
