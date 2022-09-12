import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => {
            console.log("Count", this.state.count);
        }
        );
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                <div>Count : {count}
                </div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Count;