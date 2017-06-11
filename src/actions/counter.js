import { COUNTER_SET, COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants';

export const set = (value) => ({
  type: COUNTER_SET,
  payload: value
});

export const increment = () => ({
  type: COUNTER_INCREMENT
});

export const decrement = () => ({
  type: COUNTER_DECREMENT
});

export const incrementIfOdd = () => (dispatch, getState) => {
  const { counter } = getState();

  if (counter % 2 === 0) {
    return;
  }

  dispatch(increment());
};

export const incrementAsync = (delay = 1000) => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, delay);
};
