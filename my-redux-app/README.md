# Redux
    Store 
        -> One single store for entire application
        -> Store are created using createStore method syntax:  redux.createStore(reducer)
    
    Reducers
        -> Modify the state depending on action
        -> Don't directly modify the state
        -> No side effects (http calls not allowed)

    
    Dispatch
        -> Dispatches actions to store, reaches reducer then 
        ->  The only way to update the state is to call store.dispatch() and pass in an action object.
