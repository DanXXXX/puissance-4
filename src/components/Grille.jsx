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
      statusGame: 0,
    };
  }

  arrayColumn = (arr, n) => arr.map((x) => x[n]);

  onChangeColor = (indexColumn) => {
    const gridValues = this.state.gridValues;

    const columnValues = this.arrayColumn(this.state.gridValues, indexColumn);

    const freeCasesInColumn = columnValues.filter((e) => e === "").length - 1;

    gridValues[freeCasesInColumn][indexColumn] = this.state.player;

    let winner = 0;
    let counter = 0;

    gridLoop: for (let i = 0; i < gridValues.length; i++) {
      // console.log(" i", i);
      // console.log("gridValues[i]", gridValues[i]);
      // console.log("gridValues[i].length", gridValues[i].length);
      for (let w = 0; w < gridValues[i].length; w++) {
        console.log("w", w);

        if (gridValues[i][w] !== "") {
          if (w > 0 && gridValues[i][w] === gridValues[i][w - 1]) {
            counter++;
          } else {
            counter = 0;
          }

          if (counter === 3) {
            winner = gridValues[i][w];
            break gridLoop;
          }
        }
        // } else if (gridValues[i][w] === 2) {
        //   winner = 2;
        // }
      }
    }

    if (winner === 0) {
      this.setState({
        gridValues,
        player: this.state.player === 1 ? 2 : 1,
      });
    } else {
      this.setState({
        gridValues,
        player: this.state.player === 1 ? 2 : 1,
        statusGame: winner,
      });
    }

    // if (gridValues[indexColumn][this.state.player]) {
    //   console.log("winner", indexColumn[this.state.player]);
    //   this.state.statusGame
    //     ? (gridValues[indexColumn][this.state.player] = 2)
    //     : (gridValues[indexColumn][this.state.player] = 1);
    // }
    // this.setState({
    //   gridValues,
    //   player: this.state.player === 1 ? 2 : 1,
    //   statusGame: winner,
    // });
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
    if (this.state.statusGame > 0) {
      return <h1>{`Joueur ${this.state.statusGame} WIN`}</h1>;
    } else {
      return <div className="containers">{this.renderGrill()}</div>;
    }
  }
}

export default Grille;
