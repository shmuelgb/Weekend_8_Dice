import React from "react";
import Player from "./components/Player";
import Dice from "./components/Dice";
import "./App.css";

class App extends React.Component {
  state = {
    pointsToWin: 50,
    dice: null,
    activePlayer: 1,
    winner: null,
    players: [
      {
        currentScore: 0,
        globalScore: 0,
      },
      {
        currentScore: 0,
        globalScore: 0,
      },
    ],
  };

  componentDidUpdate() {
    if (this.state.dice) {
      this.removeDice();
    }
  }

  removeDice = () => {
    setTimeout(() => {
      this.setState({ dice: null });
    }, 2000);
  };

  updateScore(player, type, value, reset) {
    const players = this.state.players;
    if (reset) {
      players[player][type] = value;
    } else {
      players[player][type] += value;
    }
    this.setState({ players: players });
  }

  changePlayer = () => {
    if (this.state.activePlayer === 1) {
      this.setState({ activePlayer: 2 });
    } else {
      this.setState({ activePlayer: 1 });
    }
  };

  rollDice = () => {
    const dice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    this.setState({ dice: dice });
    this.updateScore(
      this.state.activePlayer - 1,
      "currentScore",
      dice[0] + dice[1],
      false
    );
    if (dice[0] + dice[1] === 12) {
      this.updateScore(this.state.activePlayer - 1, "currentScore", 0, true);
      this.hold();
    }
    this.checkWinner();
  };
  hold = () => {
    const player = this.state.activePlayer - 1;
    if (this.state.players[player].currentScore === 0) return;
    this.updateScore(
      player,
      "globalScore",
      this.state.players[player].currentScore,
      false
    );
    this.updateScore(player, "currentScore", 0, true);
    this.changePlayer();
  };

  checkWinner = () => {
    for (let i = 0; i < this.state.players.length; i++) {
      if (
        this.state.players[i].globalScore +
          this.state.players[i].currentScore ===
        this.state.pointsToWin
      ) {
        this.setState({ winner: i + 1 }, () => {
          console.log(this.state.winner);
          this.reset();
        });
      } else if (
        this.state.players[i].globalScore + this.state.players[i].currentScore >
        this.state.pointsToWin
      ) {
        if (i === 0) {
          this.setState({ winner: 2 }, () => {
            console.log(this.state.winner);
            this.reset();
          });
        } else {
          this.setState({ winner: 1 }, () => {
            console.log(this.state.winner);
            this.reset();
          });
        }
      }
    }
  };

  reset = () => {
    window.location.reload();
  };

  setPointsToWin = (event) => {
    this.setState({ pointsToWin: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Player
          isTurn={this.state.activePlayer === 1}
          className="player player1"
          currentScore={this.state.players[0].currentScore}
          globalScore={this.state.players[0].globalScore}
        />
        <Player
          isTurn={this.state.activePlayer === 2}
          className="player player2"
          currentScore={this.state.players[1].currentScore}
          globalScore={this.state.players[1].globalScore}
        />
        <div className="control-container">
          <button onClick={this.reset}>New Game</button>
          {this.state.winner && <h1>Player {this.state.winner} won!</h1>}
          <div className="dice">
            {this.state.dice && <Dice dice={this.state.dice} />}
          </div>
          <button onClick={this.rollDice}>Roll Dice</button>
          <button onClick={this.hold}>Hold</button>
          <input
            type="text"
            value={this.state.pointsToWin}
            onChange={this.setPointsToWin}
          />
        </div>
      </div>
    );
  }
}
export default App;