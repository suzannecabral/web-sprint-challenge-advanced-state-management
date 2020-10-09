import React, {Component} from 'react';




class SmurfCard extends Component {
    render(){
        const { name, age, height } = this.props.smurf
        return(
            <div className="SmurfCard">
                <h3>{name}</h3>
                <p>Age: {age}, Height: {height}</p>
            </div>
        );
    }
}

export default SmurfCard;