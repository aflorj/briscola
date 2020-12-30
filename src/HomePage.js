import React, { Component } from 'react';
import './styles/homePage.css';
import { LobbyAPI } from './api.js';
import TemplatePage from './TemplatePage.js';
import { Trans } from 'react-i18next';

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
          <div id="menu-button-wrapper">
            <div
              className="menu-button"
              id="new-game"
              onClick={() => this.createGame()}
            >
              <span><Trans>Create game</Trans></span>
            </div>
            <div
              className="menu-button"
              id="join-game"
              onClick={() => {
                history.push("/join");
              }}
            >
              <span><Trans>Join game</Trans></span>
            </div>
          </div>
        }
      />
    );
  }
}

export default HomePage;
