
import {CONSTANTS} from "../actions/index"
console.log(CONSTANTS)
export const addCard = (listID, text) => {
    return {
      type: CONSTANTS.ADD_CARD,
      payload: { text, listID}
    };
  };