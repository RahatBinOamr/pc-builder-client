import { ADD_BUTTON_CLICKED } from './addAction';

const initialState = {
  addData: [],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUTTON_CLICKED:
      return {
        ...state,
        addData: [...state.addData, action.payload],
      };
    default:
      return state;
  }
};

export default addReducer;
