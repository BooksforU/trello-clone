import {CONSTANTS} from "../actions"

let listId = 2;
let cardId = 5;
const initialState = [
    {
        title:"Todo",
        id:`list-${0}`,
        cards :[
            {
                id:`card-${0}`,
                text:"payment gateway system using api calling"

            },
            {
                id:`card-${1}`,
                text:"Home Page(wireframe)"
            }
        ]
    },
    {
        title:"In-Progress",
        id:`list-${1}`,
        cards :[
            {
                id:`card-${2}`,
                text:"Responsivness of app"

            },
            {
                id:`card-${3}`,
                text:"Connect address dabase to User Db"
            },
            {
                id:`card-${4}`,
                text:"Forgot password for user"
            }
        ]
    }
]

const listReducer = (state=initialState,action)=>{
    switch(action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title:action.payload.title,
                cards : [],
                id : `list-${listId}`
            }
            listId += 1
            return [...state,newList]
        case CONSTANTS.ADD_CARD:
            console.log("hello")
            const newCard = {
                text : action.payload.text,
                id:`card-${cardId}`
            }
            cardId += 1
            console.log(newCard,state)

            const newState = state.map(list=>{
                console.log(list.id,action.payload.listID)
                if (list.id == action.payload.listID){
                    
                    return{
                        ...list,
                        cards :[...list.cards,newCard]
                    }
                } else{
                    return list
                }
            })
            return newState
        
        case CONSTANTS.DRAG_HAPPENED:
        {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                type
            } = action.payload;
            const newState = [...state]
            if (type === "list") {
                const list  = newState.splice(droppableIndexStart,1)
                newState.splice(droppableIndexEnd,0,...list)
                return newState
            }
            //in the same list 
            if (droppableIdStart === droppableIdEnd){
                const list = state.find(list=>droppableIdEnd == list.id)
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            // in another list put card 
            if (droppableIdStart !== droppableIdEnd){
                const listStart = state.find(list=>droppableIdStart == list.id)
               
                const card = listStart.cards.splice(droppableIndexStart, 1);
              
                const listEnd = state.find(list=>droppableIdEnd == list.id)
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
        return newState 
        }

        default:
            return state
    }
}

export default listReducer