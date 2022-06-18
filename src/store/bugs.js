 const BUG_ADDED  = "BUG_ADDED"
 const BUG_RESOLVED  = "BUG_RESOLVED"


 export const  bugadded=(description)=>({
   
    type:BUG_ADDED,
    payload:{
        description:description
    }

})

export const  bugresolved=(id)=>({

type:BUG_RESOLVED,
payload:id 

})



let lastId=0
export function reducer(state=[],action){
    switch (action.type) {
        case BUG_ADDED:
            return[
                ...state,
                {
                    id:++lastId,
                    description:action.payload.description,
                    resolved:false
                }
            ]
            case BUG_RESOLVED:
                return state.map(bug=>bug.id==action.payload?{...bug,resolved:true}:bug)
                
        default:state
            break;
    }
}