import { createAction,createReducer,createSlice } from "@reduxjs/toolkit"




export const bugadded = createAction("BUG_ADDED")
export const bugresolved = createAction('BUG_RESOLVED')
export const bugremove = createAction('BUG_REMOVE')


let lastId = 0

export const reducer =createReducer([],{
    BUG_ADDED:function(bugs,action){
        bugs.push( {
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    BUG_RESOLVED:function(bugs,action){
        const bugIndex= bugs.findIndex(bug=>bug.id==action.payload.id)
        bugs[bugIndex].resolved=true
    },
    // BUG_REMOVE:function(bugs,action){
    //   const bugIndex= bugs.findIndex(bug=>bug.id==action.payload.id)
    //   bugs[bugIndex].resolved=true
    // }
})

// export function reducer(state = [], action) {
//     switch (action.type) {
//         case bugadded.type:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false
//                 }
//             ]
//         case bugresolved.type:
//             return state.map(bug => bug.id == action.payload.id ? { ...bug, resolved: true } : bug)

//         case bugresolved.type:
//             return state.filter(bug => bug.id != action.payload.id )


//         default: state
//             break;
//     }
// }