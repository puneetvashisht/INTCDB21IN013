import * as actions from '../actions/weightlog-actions';
let initialState = {
    weightlogs: [
     
    ]
}
// Reducers in store to modify state -- don't directly manipulate state
const reducer = (state = initialState, action) =>{
    console.log('Action recieved at reducer***  ', action);
    switch(action.type){
        case actions.FETCH_WEIGHTLOGS:
            return {
                weightlogs: action.payload
            }       
        default : return state
    }

}
export default reducer;