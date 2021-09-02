import React from "react";
import Colonnes from "./Colonnes";

class Grille extends React.Component {
  constructor(props) {
    super(props);
  }
  renderGrill = () => {
    let grille = [];
    for (let colonne = 1; colonne <= 7; colonne++) {
      grille.push(
        <Colonnes
          toFill={this.props.toFill}
          id={colonne}
          onClick={this.props.onClick}
        />
      );
    }
    return grille;
  };

  render() {
    return <div className="containers">
    {this.renderGrill()}</div>;
  }
}

export default Grille;
