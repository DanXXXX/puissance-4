import React from "react";
import Case from "./Case";

class Colonnes extends React.Component {
  constructor(props) {
    super(props);
  }
  renderColonne = () => {
    let colums = [];
    for (let casier = 1; casier <= 6; casier++) {
      colums.push(
        <Case
          toFill={this.props.toFill}
          id={casier}
          onClick={this.props.onClick}
        />
      );
    }
    return colums;
  };

  render() {
    return <div className="colone">{this.renderColonne()}</div>;
  }
}

export default Colonnes;
