// export default function createStore(reducer) {

//     let state
//     let listeners=[]

//     function getState(){
//         return state 
//     }
//     function subscribe(listner){
//         listeners.push(listner)
//     }
//     function dispatch(action)
//     {
//        state=reducer(state,action)
//        listeners.map(listener=>listener())
//     }

//     return{
//         getState,
//         dispatch,
//         subscribe,
//     }

// }


export default connect(mapStateToProps,mapDispatchToProps)(MyComponent)

function connect(mapStateToProps, mapDispatchToProps) {
    // It lets us inject component as the last step so people can use it as a decorator.
    // Generally you don't need to worry about it.
    return function (WrappedComponent) {
      // It returns a component
      return class extends React.Component {
        render() {
          return (
            // that renders your component
            <WrappedComponent
              {/* with its props  */}
              {...this.props}
              {/* and additional props calculated from Redux store */}
              {...mapStateToProps(store.getState(), this.props)}
              {...mapDispatchToProps(store.dispatch, this.props)}
            />
          )
        }
        
        componentDidMount() {
          // it remembers to subscribe to the store so it doesn't miss updates
          this.unsubscribe = store.subscribe(this.handleChange.bind(this))
        }
        
        componentWillUnmount() {
          // and unsubscribe later
          this.unsubscribe()
        }
      
        handleChange() {
          // and whenever the store state changes, it re-renders.
          this.forceUpdate()
        }
      }
    }
  }