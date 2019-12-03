import axios from "axios";

export const GET_SMURF_START = "GET_SMURF_START";
export const GET_SMURF_SUCCESS = "GET_SMURF_SUCCESS";
export const GET_SMURF_FAILED = "GET_SMURF_FAILED";

export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";

export const getSmurfData = () => dispatch => {
  dispatch({ type: GET_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log("GET:you got it dude", res);
      dispatch({
        type: GET_SMURF_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("GET, we failed my master", err);
      dispatch({
        type: GET_SMURF_FAILED,
        payload: err
      });
    });
};

export const addSmurfData = smurf => {
  return (dispatch) => {
    dispatch({ type: ADD_SMURF_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log("POST: We delivered the package", res);
        dispatch({
          type: ADD_SMURF_SUCCESS,
          paylod: res.data
        });
      })
      .catch(err => {
        console.log("POST: you failed", err);
        dispatch({
          type: ADD_SMURF_FAILED,
          payload: err
        });
      });
  }
}
