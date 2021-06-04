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


    Steps for : React application to use redux
    1. npm i react-redux (bridge library b/w react and redux)
    2. Store and reducers
    3. Provide store to entire app by using <Provider> from 'react-redux'
    4. Connect to store in components: connect(mapStateToProps)(Component)
    5. Change component to display from props and not from state
