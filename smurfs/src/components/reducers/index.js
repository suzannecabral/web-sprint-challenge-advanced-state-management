//import actions { ACTION_NAME } from "../actions" (from the index file)

const initialState = {
    testKey:false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        //cases go here

        default:return state;
    }
}