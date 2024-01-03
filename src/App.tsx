
import './App.css';
import React from "react";
/*class , Function */
class Counter extends React.Component<{},{count:number}>{
    constructor(props:{}) {
        super(props);
        this.state={
            count:0
        }
    }

    increment=()=>{
        this.setState((lastState)=>({
           count:lastState.count+1
        }))
    }

    decrement=()=>{
        this.setState((lastState)=>({
            count:lastState.count-1
        }))
    }
    render() {
        return(
            <>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </>
        )
    }

}


export default Counter
