import React, {Component} from "react";
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',response:"",clicked:"non"};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.get('/election/create');
            this.setState({response:response.data});
            this.setState({response:"foo"});
	    console.log("success")
            console.log(response.data)
        }catch(error){
           this.setState({response:error.toString()});
           console.log("error")
        }

    }
    


    handleClick(event) {
	    console.log("bar")
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
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="submit" >SUBMIT</button>
                    <div>{this.state.response}</div>
                </form>
            </div>

        );
    }

}

export default Form;
