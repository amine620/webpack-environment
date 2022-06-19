import { bugadded, bugremove, bugresolved} from "./store/bugs";
import {  store } from "./store/configureStore";


// document.getElementById('btn2').addEventListener('click',function(){

//     store.dispatch(bugresolved(1))
// })

store.dispatch(bugadded({description:"bug 1"}))
store.dispatch(bugadded({description:"bug 2"}))
store.dispatch(bugadded({description:"bug 3"}))

store.dispatch(bugresolved({id:1}))
// store.dispatch(bugremove({id:1}))


