import React, { Component } from 'react';
import SmurfCard from './SmurfCard';
import { connect } from 'react-redux';

// const smurfData = [
//     {"name":"Brainy","age":200,"height":"5cm","id":0},
//     {"name":"Clumsy","age":200,"height":"5cm","id":0},
//     {"name":"Greedy","age":200,"height":"5cm","id":0},
//     {"name":"Hefty","age":200,"height":"5cm","id":0},
//     {"name":"Papa","age":200,"height":"5cm","id":0},
//     {"name":"Smurfette","age":200,"height":"5cm","id":0},
//     {"name":"Grouchy","age":200,"height":"5cm","id":0},
//     {"name":"Handy","age":200,"height":"5cm","id":0},
//     {"name":"Gutsy","age":200,"height":"5cm","id":0},
//     {"name":"Jokey","age":200,"height":"5cm","id":0},
//     {"name":"Chef","age":200,"height":"5cm","id":0},
//     {"name":"Farmer","age":200,"height":"5cm","id":0},
// ]

class SmurfList extends Component {
    render(){
        return(
            <div className="SmurfList">
                <h2>The Village:</h2>

                <div className="list">
                {
                    this.props.smurfData.map(
                        (smurf)=>{
                            return(
                                <SmurfCard smurf={smurf} />
                            );
                        }
                    )
                }
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        smurfData:state.smurfData
    }
}

export default connect(mapStateToProps,{})(SmurfList);