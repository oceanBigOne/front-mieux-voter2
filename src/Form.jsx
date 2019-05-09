import React, {Component} from "react";
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',clicked:"non"};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get('/election/create')
            .then(
                (response)=>{
                    this.setState({value:response});
                }
                ).catch(
                    (error)=>{
                        this.setState({value:error});
                    });
    };

    handleChange = (event) => {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change)
    };

    handleClick= () => {
        let newClickedState="non";
        if(this.state.clicked==="non"){
            newClickedState="oui";
        }
        this.setState({clicked:newClickedState});
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handleClick} >{this.state.clicked}</button>
                <form onSubmit={this.handleSubmit}>

                    <label >
                        Name :
                        <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="submit" >SUBMIT</button>
                    <div>{this.state.response}</div>
                </form>
            </div>

        );
    }

}

export default Form;
