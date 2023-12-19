import React from 'react';

class LifecycleExample extends React.Component {

    constructor() {
        super();
        // Initialize state with a value of 0
        this.state = { value: 0 };
        // Log that the constructor is being called
        console.log("constructor is getting called");
    }

    componentDidMount() {
        // Log that the component has been mounted to the DOM
        console.log("componentDidMount is getting called");
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Log that the shouldComponentUpdate method is being called
        console.log("shouldComponentUpdate is called");
        // Return true if the value in state is different from the next state
        return this.state.value !== nextState.value;
    }

    componentDidUpdate(prevProps, prevState) {
        // Log that the componentDidUpdate method is being called
        console.log("componentDidUpdate is called");
    }

    componentWillUnmount() {
        // Log that the component is about to be unmounted
        console.log("componentWillUnmount is called");
    }

    // Event handler for the button click, incrementing the value in state
    handleButtonClick = () => {
        this.setState((prevState) => (
            { value: prevState.value + 1 }
        ));
    }

    render() {
        return (
            <div>
                {/* Display the current value from state */}
                <p>Value: {this.state.value}</p>
                {/* Button to trigger the handleButtonClick event */}
                <button onClick={this.handleButtonClick}>ADD</button>
            </div>
        );
    }
}

export default LifecycleExample;
