import { ADD_ONE, MINUS_ONE, ZERO } from "./actions";

const initialState = {
  number: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case ZERO:
      return {
        number: 0,
      };
    default:
      return state;
  }
}

export default reducer;
