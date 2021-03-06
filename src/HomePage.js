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
    console.log('createGame');
    if (this.state.loading) {
      return;
    } else {
      this.setState({
        loading: true,
      });
    }
    api.createRoom(2, true).then(
      (roomID) => {
        const history = this.props.history;
        console.log('Created room with roomID = ', roomID);
        this.setState({ loading: false });
        history.push('/lobby/' + roomID);
      },
      (err) => {
        console.log(err);
        this.setState({ loading: false });
      }
    );
  };

  joinQueue = () => {
    const history = this.props.history;
    console.log('Joining the public queue.');
    api.listAllPublicGames().then(
      (data) => {
        const publicMatches = data.matches;
        const availablePublicMatches = [];
        for (let match of publicMatches) {
          if (match.players[1].name === undefined) {
            availablePublicMatches.push(match);
          }
        }
        if (availablePublicMatches.length === 0) {
          api.createRoom(2, false).then((matchID) => {
            console.log(
              `No players waiting in the queue. Created a public lobby (id: ${matchID}).`
            );
            history.push('/public_lobby/' + matchID);
          });
        } else {
          console.log(
            `A player is waiting for an opponent. Joining his public lobby (id: ${availablePublicMatches[0].matchID}).`
          );
          history.push('/public_lobby/' + availablePublicMatches[0].matchID);
        }
      },
      (err) => {
        console.log(err);
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
              <span>
                <Trans>Private lobby</Trans>
              </span>
            </div>
            <div
              className="menu-button"
              id="list-games"
              onClick={() => this.joinQueue()}
            >
              <span>
                <Trans>Public lobby</Trans>
              </span>
            </div>
            <div
              className="menu-button"
              id="join-game"
              onClick={() => {
                history.push('/join');
              }}
            >
              <span>
                <Trans>Join lobby</Trans>
              </span>
            </div>
          </div>
        }
      />
    );
  }
}

export default HomePage;
