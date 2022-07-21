import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets';
import store from '../Redux/ConfigureStore';

it('Check if it renders', () => {
  const output = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(output).toMatchSnapshot();
});
