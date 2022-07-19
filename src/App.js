import React from 'react';
import Navbar from './components/Navbar';
import Routes from './routes/routes';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore';

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes />
  </Provider>
);

export default App;
