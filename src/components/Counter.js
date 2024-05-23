import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// Map state to props
const mapStateToProps = state => ({
  count: state.counter.count
});

// Map dispatch to props
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
