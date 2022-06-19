import { bugadded, bugremove, bugresolved} from "./store/bugs";
import { projectadded} from "./store/projects";
import {  store } from "./store/configureStore";


store.dispatch(bugadded({description:"bug 1"}))
store.dispatch(bugresolved({id:1}))


store.dispatch(projectadded({name:"first project"}))

