import React from "react";
import { Button } from "antd";

class ClassComponentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { btnVisible: true };
  }
  
  render() {
    const {btnVisible} = this.state;

    return (
      <div {...this.props}>
        {btnVisible && (
          <Button
            onClick={() => {
              this.setState({ btnVisible: !btnVisible });
            }}
          >
            Don't click me!
          </Button>
        )}
        {btnVisible ? (
          <h1 data-cy="msg">Do not click the button &gt;:C</h1>
        ) : (
          <h1>Y u lik dis :(</h1>
        )}
      </div>
    );
  }
}

export default ClassComponentDemo;
