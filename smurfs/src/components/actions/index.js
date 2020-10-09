export const ADD_BUTTON = "ADD_BUTTON";

export const addButton=(e, smurf)=> {
    e.preventDefault();
    return{
        type:ADD_BUTTON,
        payload:smurf
    }
}


export const HANDLE_SUBMIT = "HANDLE_SUBMIT";

export const handleSubmit = (e)=>{
    e.preventDefault(); 
    // console.log("Actions file: form submitted");
    return{
        type:HANDLE_SUBMIT
    }
 }

