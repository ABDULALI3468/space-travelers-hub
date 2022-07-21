import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';

import store from '../Redux/ConfigureStore';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Missions component', () => {
  render(<Provider store={store}><Missions /></Provider>);
  screen.debug();
});
