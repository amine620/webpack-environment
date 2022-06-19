import {createSlice } from "@reduxjs/toolkit"

import {createSelector} from "reselect"


let lastId = 0

const slice=createSlice({
    name:"bugs",
    initialState:[],
    reducers:{
        bugadded:(bugs,action)=>{
            bugs.push( {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugresolved:(bugs,action)=>{
            const bugIndex= bugs.findIndex(bug=>bug.id==action.payload.id)
            bugs[bugIndex].resolved=true
        }
    }
})

export const {bugadded,bugresolved} = slice.actions
export default slice.reducer

// export const getUnresolvedBugs=state=>{
//     return state.entities.bugs.filter(bug=>!bug.resolved)
// }

export const getUnresolvedBugs= createSelector(
    state=>state.entities.bugs,
    bugs=>bugs.filter(bug=>!bug.resolved)
)