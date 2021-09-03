import React from "react";
import Colonnes from "./Colonnes";

class Grille extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridValues: [
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
      ],
      player: 1,
    };
  }

  arrayColumn = (arr, n) => arr.map((x) => x[n]);

  onChangeColor = (indexColumn) => {
    const gridValues = this.state.gridValues;

    const columnValues = this.arrayColumn(this.state.gridValues, indexColumn);

    const freeCasesInColumn = columnValues.filter((e) => e === "").length - 1;

    gridValues[freeCasesInColumn][indexColumn] = this.state.player;

    this.setState({
      gridValues,
      player: this.state.player === 1 ? 2 : 1,
    });
  };

  renderGrill = () => {
    let grille = [];

    for (let colonne = 0; colonne <= 6; colonne++) {
      grille.push(
        <Colonnes
          key={colonne}
          indexColumn={colonne}
          onClick={() => this.onChangeColor(colonne)}
          columnValues={this.arrayColumn(this.state.gridValues, colonne)}
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
