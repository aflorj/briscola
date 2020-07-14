import React, { Component } from "react";
import "./styles/homePage.css";
import { LobbyAPI } from "./api.js";
import TemplatePage from "./templatePage.js";
import lobbyButton from "./images/lobbyButton.png";
const api = new LobbyAPI();
class HomePage extends Component {
  state = {
    loading: false,
    redirect: null,
  };
  createGame = () => {
    console.log("createGame");
    if (this.state.loading) {
      return;
    } else {
      this.setState({
        loading: true,
      });
    }
    api.createRoom(2).then(
      (roomID) => {
        const history = this.props.history;
        console.log("Created room with roomID = ", roomID);
        this.setState({ loading: false });
        history.push("/lobby/" + roomID);
      },
      (err) => {
        console.log(err);
        this.setState({ loading: false });
      }
    );
  };
  render() {
    const history = this.props.history;
    return (
      <TemplatePage
        content={
          <>
            <div className="menu-cards">
              <div
                className="card"
                id="new-game"
                onClick={() => this.createGame()}
              >
                <img src={lobbyButton} alt={"New game"}/>
                <div className="card-inside start">
                  <h1>new game</h1>
                </div>
              </div>
              <div
                className="card"
                id="join-game"
                onClick={() => {
                  history.push("/join");
                }}
              >
                <img src={lobbyButton} alt={"Join game"}/>
                <div className="card-inside join">
                  <h1>join game</h1>
                </div>
              </div>
            </div>
          </>
        }
      />
    );
  }
}

export default HomePage;