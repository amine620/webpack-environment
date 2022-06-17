export  const reducer = (state = [0], action) => {
    switch (action.type) {
       case 'ITEMS_REQUEST':
              alert('hi')
       default:
          return state;
    }
 }