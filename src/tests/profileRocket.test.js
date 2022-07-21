import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyProfile from '../components/MyProfile';
import store from '../Redux/ConfigureStore';

it('Check if it renders correctly', () => {
  const output = renderer
    .create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    )
    .toJSON();
  expect(output).toMatchSnapshot();
});
