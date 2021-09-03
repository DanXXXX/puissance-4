import React from "react";
import Case from "./Case";

class Colonnes extends React.Component {
  renderColonne = () => {
    let colums = [];

    for (let casier = 0; casier <= 5; casier++) {
      colums.push(
        <Case
          key={casier}
          indexRow={casier}
          color={
            this.props.columnValues[casier] === 1
              ? "red"
              : this.props.columnValues[casier] === 2
              ? "yellow"
              : "white"
          }
        />
      );
    }

    return colums;
  };

  render() {
    return (
      <div className="colone" onClick={this.props.onClick}>
        {this.renderColonne()}
      </div>
    );
  }
}

export default Colonnes;
