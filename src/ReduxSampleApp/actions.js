export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const incrementBy = value => ({
  type: 'INCREMENT_BY',
  payload: value,
});
