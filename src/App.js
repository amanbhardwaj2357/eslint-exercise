import React from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue : 0,
        };
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    incrementCounter(){
        this.setState({
            counterValue: this.state.counterValue + 1,
        });
    }

    decrementCounter(){
        this.setState({
            counterValue: this.state.counterValue - 1,
        });
    }

    render() {
        var APP_HEADING = "Counting App";
        var INCREMENT = "Increment";
        var DECREMENT = "Decrement";
        return (
            <div className="App">
                <div className="heading">
                    {APP_HEADING}
                </div>
                <div className="count">
                    {this.state.counterValue}
                </div>
                <div className="buttons">
                    <Button className="increment" onClick={this.incrementCounter}>{INCREMENT}</Button>
                    <Button className="decrement" onClick={this.decrementCounter}>{DECREMENT}</Button>
                </div>
            </div>
        );
    }
}

export default App;
