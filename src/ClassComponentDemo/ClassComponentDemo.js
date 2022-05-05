import React from "react";
import { Button } from "antd";

//Hello im a class component
class ClassComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      //here is the jsx 
      <div>
        {/* What do squiggly brackets do? */}
        {this.state.change && (
          <Button
            onClick={() => {
              this.setState({ change: !this.state.change });
            }}
          >
            Don't click me!
          </Button>
        )}
        {this.state.change ? (
          <h1>Do not click the button &gt;:C</h1>
        ) : (
          <h1>Y u lik dis :(</h1>
        )}
      </div>
    );
  }
}

export default ClassComponentDemo;
