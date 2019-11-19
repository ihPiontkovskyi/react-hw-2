export default (state = 0, action) => {
  console.log('[Reducer] new action', action);

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return state - 1;

    case 'INCREMENT_BY':
      return state + action.payload;

    default:
      return state;
  }
};
