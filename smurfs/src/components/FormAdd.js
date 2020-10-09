import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addButton, handleSubmit } from './actions';
class FormAdd extends Component {

    render(){
        return(
            <div className="FormAdd">
                <h2>Add a Smurf:</h2>
                <form
                    onSubmit={this.props.handleSubmit}
                >
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
                        // onClick={()=>{addButton(smurf)}}
                    >
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addButton, handleSubmit})(FormAdd);