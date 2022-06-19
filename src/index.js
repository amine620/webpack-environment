import { bugadded, bugremove, bugresolved, getUnresolvedBugs} from "./store/bugs";
import { projectadded} from "./store/projects";
import {  store } from "./store/configureStore";


store.dispatch((dispatch,getState)=>{
    dispatch(bugadded({description:'bug1'}))
})


// store.dispatch(projectadded({name:"first project"}))

