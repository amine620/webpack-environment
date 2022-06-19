import {createSlice } from "@reduxjs/toolkit"




let lastId = 0

const slice=createSlice({
    name:"projects",
    initialState:[],
    reducers:{
        projectadded:(projects,action)=>{
            projects.push( {
                id: ++lastId,
                name:action.payload.name
            })
        },
      
    }
})

export const {projectadded} = slice.actions
export default slice.reducer
// console.log(slice);