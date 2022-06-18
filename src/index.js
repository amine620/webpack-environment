import { bugadded, bugresolved} from "./store/bugs";
import { configureStore } from "./store/configureStore";
// import { store } from "./store";


// document.getElementById('btn2').addEventListener('click',function(){

//     store.dispatch(bugresolved(1))
// })
const store=configureStore()

store.dispatch(bugadded("bug 1"))
store.dispatch(bugadded("bug 2"))
store.dispatch(bugadded("bug 3"))

