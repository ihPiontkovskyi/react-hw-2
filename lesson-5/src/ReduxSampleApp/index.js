import React from 'react';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReduxSampleApp from './ReduxSampleApp';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <ReduxSampleApp />
  </Provider>
);

export default App;
