import {
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILED,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED
} from "../actions";

const initialState = {
  isLoading: false,
  error: "",
  smurfs: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURF_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };

    case GET_SMURF_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case ADD_SMURF_START:
      return {
        ...state,
        isLoading: true
      };

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload]
      };

    case ADD_SMURF_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};
export default reducers;
