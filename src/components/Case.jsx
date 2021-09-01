import React from "react";

class Case extends React.Component {
  render() {
    return (
      <div
        style={
          {
            //   backgroundColor: `${
            //     this.props.toFill.some(+this.props.id) ? "red" : "white"
            //   }`,
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
