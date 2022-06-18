import { bugadded, bugresolved, resolved } from "./actionsCreator";
// import { store } from "./store";

import store from "./customStore";

document.getElementById('btn1').addEventListener('click',function(){

    store.dispatch(bugadded("added"))
console.log(store.getState());

})
// document.getElementById('btn2').addEventListener('click',function(){

//     store.dispatch(bugresolved(1))
// })
let unsubscribe=store.subscribe(()=>{
   

    console.log("state change");
}
)
