import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.push[action.payload.data]; // NEVER EVER MANIPULATE!!
      // so we may not mutate state, but give a clean new state:
      // return state.concat([action.payload.data]); // better! sugar:
      return [ action.payload.data, ...state ];
  }
  return state;
}
