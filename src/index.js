import { bugadded, bugresolved, resolved } from "./actionsCreator";
import { store } from "./store";


document.getElementById('btn1').addEventListener('click',function(){

    store.dispatch(bugadded("added"))
})
document.getElementById('btn2').addEventListener('click',function(){

    store.dispatch(bugresolved(1))
})

// console.log(store.getState());
let unsubscribe=store.subscribe(()=>{
    let data=store.getState()
//    data.forEach(el=>{
//         document.querySelector('div').innerHTML+=el.id
//     })
    console.log(data);
}
)
// unsubscribe()