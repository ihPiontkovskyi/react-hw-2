import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './actions';
import './index.css';

const ReduxSampleApp = ({value, increment, decrement, incrementBy}) => {
  return (
    <div>
      <h2>Counter value: {value}</h2>
      <button className="action-button" onClick={increment}>
        Increment
      </button>
      <button className="action-button" onClick={decrement}>
        Decrement
      </button>

      <button className="action-button" onClick={() => incrementBy(2)}>
        Increment By 2
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  value: state,
});

const ConnectedReduxSampleApp = connect(mapStateToProps, {
  increment: Actions.increment,
  decrement: Actions.decrement,
  incrementBy: Actions.incrementBy,
})(ReduxSampleApp);

export default ConnectedReduxSampleApp;
