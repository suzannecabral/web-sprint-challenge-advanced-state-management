import shortid from "shortid";

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf=(smurf)=>{
    
    const idSmurf={
        ...smurf,
        id:shortid.generate()
    }

    return{
        type:ADD_SMURF,
        payload:idSmurf
    }
}