import { store } from "./store";




store.dispatch({
    type:"bugAdded",
    payload:{
        description:'added'
    }
})
console.log(store.getState());
