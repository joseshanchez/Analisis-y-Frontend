import validatorTransformer from './transformers/availableProducts';
import api from './api/catalog';

export const GET_ACTION_START = 'GET_ACTION_START';
export const GET_ACTION_ERROR = 'GET_ACTION_ERROR';
export const GET_ACTION_SUCCESS = 'GET_ACTION_SUCCESS';


export const TRANSFORMATION_ERROR = {
  message: 'Data does not conform to validators.',
};

function getActionStart() {
  return {
    type: GET_ACTION_START,
  };
}

function getActionError(error) {
  return {
    type: GET_ACTION_ERROR,
    error,
  };
}

function getActionSuccess(data) {
  return {
    type: GET_ACTION_SUCCESS,
    data,
  };
}

export function getAsync(request) {
  return function (dispatch) {
    dispatch(getActionStart());
    api.getyAsync(request)    
      .then(data => dispatch(() => {
        const trasformedData = validatorTransformer.transformResponse(data);
        if (trasformedData) {
          dispatch(getActionSuccess(trasformedData));
        } else {
          dispatch(getActionError(TRANSFORMATION_ERROR));
        }
      }))
      .catch(error => dispatch(getActionError(error)));
  };
}