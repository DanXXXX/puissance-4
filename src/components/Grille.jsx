import React from "react";
import Case from "./Case";

class Grille extends React.Component {
  constructor(props) {
    super(props);
  }
  renderGrill = () => {
    let grille = [];
    for (let casier = 1; casier <= 42; casier++) {
      grille.push(
        <Case
          toFill={this.props.toFill}
          id={casier}
          onClick={this.props.onClick}
        />
      );
    }
    return grille;
  };

  render() {
    return <div className="containers">{this.renderGrill()}</div>;
  }
}

export default Grille;
