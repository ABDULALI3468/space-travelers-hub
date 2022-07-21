import React from 'react';
import renderer from 'react-test-renderer';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';

import store from '../Redux/ConfigureStore';

it('renders correctly', () => {
  const mission = {
    mission_id: '1',
    mission_name: 'Test Mission',
    description: ' This is a test mission',
    reserved: true,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render Mission component', () => {
  const mission = {
    mission_id: '1',
    mission_name: 'Test Mission',
    description: ' This is a test mission',
    reserved: true,
  };
  render(
    <Provider store={store}>
      <table>
        <tbody>
          <Mission mission={mission} />
        </tbody>
      </table>
    </Provider>,
  );
  screen.debug();
});
