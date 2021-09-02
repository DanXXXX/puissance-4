import React from "react";

class Case extends React.Component {
  render() {
    return (
      <div className="case" style={{ backgroundColor: this.props.color }}></div>
    );
  }
}

export default Case;
