
import {CONSTANTS} from "../actions/index"
export const addList = (title,listId) =>{
    return{
        type:CONSTANTS.ADD_LIST,
        payload:{title,listId}
    }
}
export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
  ) =>{
      return{
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexEnd,
            droppableIndexStart,
            draggableId,
            type
            
          }
      }
  }