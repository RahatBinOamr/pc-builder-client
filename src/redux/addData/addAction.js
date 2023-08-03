export const ADD_BUTTON_CLICKED = 'ADD_BUTTON_CLICKED';

export const addValue = value => {
  return {
    type: ADD_BUTTON_CLICKED,
    payload: value,
  };
};
