import React, { Component } from 'react';

class FormAdd extends Component {
    render(){
        return(
            <div className="FormAdd">
                <h2>Add a Smurf:</h2>
                <form>
                    <input
                        type="text"
                        placeholder="name"
                        name="smurfName"
                    />
                    <input
                        type="number"
                        placeholder="age"
                        name="smurfAge"
                    />
                    <input
                        type="number"
                        placeholder="height (cm)"
                        name="smurfHeight"
                    />
                    <button
                        type="submit"
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default FormAdd;