import * as actions from "./actionTypes"


export const  bugadded=(description)=>({
   
        type:actions.BUG_ADDED,
        payload:{
            description:description
        }
    
})