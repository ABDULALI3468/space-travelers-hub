import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Routes from './routes/routes';
import store from './Redux/ConfigureStore';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes />
  </Provider>
);

export default App;
