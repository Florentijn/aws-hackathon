// @flow
/**
 * Created by Florentijn Hogerwerf, Jim Bemelen on 24/10/16.
 */

import type {StateCEO} from './../types/state';
import type {ActionCEO} from '../types/actions';


let variables = [
    "Fertiliser",
    "Crop Yield",
    "Pesticide",
    "Area Size (Hectare)",
    "Education",
    "Number of Farm Fields",
    "Nutrition",
    "Soil Composition",
]

/**
 * Reducer responsible for managing the CEO Dashboard data state.
 * @param state The previous state of the CEO Dashboard.
 * @param action The action to apply to the state.
 * @returns {*} The new state.
 */
let ceo = (state: StateCEO = {isFetching: false, data: null}, action: ActionCEO) => {

  switch (action.type) {
    case "REQUEST_DATA":
      return {
        ...state,
        isFetching: true,
        data: null
      };
    case "RECEIVE_DATA":
      return {
        ...state,
        isFetching: false,
        data: action.data,
        variables: variables,
        selectedVariable: variables[0]
      };
    case "SELECT_VARIABLE":
      return {
        ...state,
        isFetching: false,
        data: action.data,
        variables: variables,
        selectedVariable: action.variable
    };
    default:
      return state
  }
};

export default ceo
