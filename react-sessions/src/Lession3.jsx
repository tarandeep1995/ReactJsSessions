import React from 'react'

class StateFulComponet extends React.Component{

    constructor(){
        super()
        this.state={
            counter:0,
        }
    }
    handleIncreClick=()=>{
        // this.setState((prevState)=>({
        //     counter:prevState.counter+1,
    //})) 
                                    //we can use both methods
        this.setState({ counter: this.state.counter + 1 });
    
    }
    handleDecreClick=()=>{
        // this.setState((prevState)=>({
        //     counter:prevState.counter-1,
        // }))
                                    //we can use both methods
        this.setState({ counter: this.state.counter - 1 });
    }
    handleMutiplyClick=()=>{
        // this.setState((prevState)=>({
        //     counter:prevState.counter*2,
        // }))
                                            //we can use both methods
        this.setState({ counter: this.state.counter * 2 });
    }
    handleResetClick=()=>{
        this.setState((prevState)=>({
            counter:0,
        }))
    }
    handleDivClick=()=>{
        // this.setState((prevState)=>({
        //     counter:Math.floor(prevState.counter/2),
        // }))
                                            //we can use both methods
        this.setState({ counter: Math.floor(this.state.counter / 2) });
    }
    render(){
        return(
            <div>
                <h1>Counter:{this.state.counter}</h1>
                <button onClick={this.handleResetClick}>Reset Counter</button>
                <button onClick={this.handleIncreClick}>Increment Counter</button>
                <button onClick={this.handleDecreClick}>Decrement Counter</button>
                <button onClick={this.handleMutiplyClick}>Multiply Counter</button>
                <button onClick={this.handleDivClick}>Division Counter</button>
            </div>
        )
    }
}

export default StateFulComponet
