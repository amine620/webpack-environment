import * as actions from "./actionTypes";

let lastId=0
export function reducer(state=[],action){
    switch (action.type) {
        case actions.BUG_ADDED:
            return[
                ...state,
                {
                    id:++lastId,
                    description:action.payload.description,
                    resolved:false
                }
            ]
        default:state
            break;
    }
}