import React from "react";

class Case extends React.Component {
  render() {
    return (
      <div
        style={
          {
            
          }
        }
        className="case"
        id={this.props.id}
        onClick={this.props.onClick}
      ></div>
    );
  }
}

export default Case;
