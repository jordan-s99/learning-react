import React from "react";

class Counter extends React.Component{

    constructor(){
        super();
        this.state = {
            counterValue: 0 // counterV key with an initial value
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        // .bind fixes the context of the handleButtonClick function
        // or can put it in the constructor i think 
        // wouldn't have to deal with the bind nonsense in a functional component - hence why they're better 
    }

    handleButtonClick() {
        console.log("button clicked");
        this.setState({counterValue: this.state.counterValue + 1});
    }

render(){
    return(
        <div>
        <h1>{`I'm ${this.props.name}'s Counter`}</h1>
        <h3>{`Current value: ${this.state.counterValue}`}</h3>
        <button onClick={this.handleButtonClick}>Add 1</button>
        </div>
    )
}
}

export default Counter;