import createStore from "./customStore";

import { reducer } from "./reducer";

const store = createStore(reducer);

console.log(store.dispatch({
    type:"ITEMS_REQUEST"
}));