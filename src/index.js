import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.addButton = this.addButton.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }
  addButton(e) {
    e.preventDefault();
    console.log("clicked");
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  removeButton(e) {
    e.preventDefault();
    if (this.state.count > 0) {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }
  }
  render() {
    let boxes = [];
    for (let i = 0; i < this.state.count; i++) {
      boxes.push(<span key={i}>Item {i + 1}</span>);
    }
    return (
      <div>
        <h1> Click Box </h1>
        <React.Fragment>
          <button onClick={this.addButton}>Add</button>
          <button onClick={this.removeButton}>Remove</button>
          <br />
          {boxes}
          {this.state.count === 0 ? null : <p> {this.state.count}</p>}
        </React.Fragment>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
