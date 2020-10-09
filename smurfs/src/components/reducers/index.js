//import actions { ACTION_NAME } from "../actions" (from the index file)

const initialState = {
    testKey:false,
    isLoading:false,
    smurfData: [
        {"name":"Brainy","age":200,"height":"5cm","id":0},
        {"name":"Clumsy","age":200,"height":"5cm","id":1},
        {"name":"Greedy","age":200,"height":"5cm","id":2},
        {"name":"Hefty","age":200,"height":"5cm","id":3},
        {"name":"Papa","age":200,"height":"5cm","id":4},
        {"name":"Smurfette","age":200,"height":"5cm","id":5},
        {"name":"Grouchy","age":200,"height":"5cm","id":6},
        {"name":"Handy","age":200,"height":"5cm","id":7},
        {"name":"Gutsy","age":200,"height":"5cm","id":8},
        {"name":"Jokey","age":200,"height":"5cm","id":9},
        {"name":"Chef","age":200,"height":"5cm","id":10},
        {"name":"Farmer","age":200,"height":"5cm","id":11},
    ]
    
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        //cases go here

        default:return state;
    }
}