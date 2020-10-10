import React, { Component, setState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from './actions';
import shortid from 'shortid';

class FormAdd extends Component {

    //local state for form values
    state={
        name:"",
        age:0,
        height:0,
        id:null,
    }

    //updates local state with form values
    handleChange=(e)=>{
        const newState=
        {...this.state,
            [e.target.name]:e.target.value
        }
        this.setState(newState);
    }

    //on submit, stops refresh and sends state value to dispatch
    handleSubmit=(e)=>{
        e.preventDefault();

        const smurf = this.state;
        const idSmurf={
            ...smurf,
                id:shortid.generate(),
                height:smurf.height += "cm",
        }

        this.props.addSmurf(idSmurf);
    }

    render(){
        return(
            <div className="FormAdd">
                <h2>Add a Smurf:</h2>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input
                        id="name"
                        type="text"
                        placeholder="name"
                        name="name"
                        onChange={this.handleChange}
                    />
                    <input
                        id="age"
                        type="number"
                        placeholder="age"
                        name="age"
                        onChange={this.handleChange}
                    />
                    <input
                        id="height"
                        type="number"
                        placeholder="height (cm)"
                        name="height"
                        onChange={this.handleChange}
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

export default connect(null, {addSmurf})(FormAdd);