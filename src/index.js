import { bugadded } from "./actionsCreator";
import { store } from "./store";


document.getElementById('btn').addEventListener('click',function(){

    store.dispatch(bugadded("added"))
})

// console.log(store.getState());
let unsubscribe=store.subscribe(()=>{
//     let data=store.getState()
//    data.forEach(el=>{
//         document.querySelector('div').innerHTML+=el.id
//     })
    console.log("state change");
}
)
// unsubscribe()