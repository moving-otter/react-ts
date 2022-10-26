import {connect} from 'react-redux';
import {Counter} from './Counter';

// map redux state to component props
const mapStateToProps = (state) => {
  return {
    countValue: state.count
  };
};

// action
const increaseAction = {
  type: "increase"
};
const decreaseAction = {
  type: "decrease"
};

// map redux action to component props
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch(increaseAction),
    decreaseCount: () => dispatch(decreaseAction),
  };
};

// High Order Component
export const CounterHoc = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);