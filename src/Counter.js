import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount // 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        },
            () => { console.log("This is callback function", this.state.count) }
        );
        console.log(this.state.count)
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.increment} >increment</button>
                <button onClick={this.decrement} >decrement</button>
            </div>
        )
    }
}
export default Counter