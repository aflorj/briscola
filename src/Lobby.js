import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SocketIO } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/react';
import './styles/lobby.css';
import { LobbyAPI } from './api.js';
import { Briscola } from './gameLogic.js';
import Board from './Board.js';
import TemplatePage from './TemplatePage.js';
import { WEB_SERVER_URL, GAME_SERVER_URL, APP_PRODUCTION } from './config.js';
import { Trans } from 'react-i18next';

const api = new LobbyAPI();
const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : GAME_SERVER_URL;
const GameClient = Client({
  game: Briscola,
  board: Board,
  debug: false,
  multiplayer: SocketIO({
    server: server,
  }),
});
class Lobby extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log('construct');
    this.state.id = props.match.params.id;
    this.state.joined = [];
    this.state.myID = null;
    this.state.userAuthToken = null;
  }
  componentDidMount() {
    this.checkRoomStateAndJoin();
    this.interval = setInterval(this.checkRoomState, 1000);
    window.addEventListener('beforeunload', this.cleanup.bind(this));
  }
  cleanup() {
    console.log('cleaning up');
    api.leaveRoom(this.state.id, this.state.myID, this.state.userAuthToken);
    clearInterval(this.interval);
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.cleanup.bind(this));
  }
  joinRoom = (player_no) => {
    const username = 'Player ' + player_no;
    if (this.state.id) {
      api.joinRoom(this.state.id, username, player_no).then(
        (authToken) => {
          console.log('Joined the room. Your id is: ', player_no);
          console.log(this.state);
          this.setState({ myID: player_no, userAuthToken: authToken });
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  checkRoomStateAndJoin = () => {
    console.log('Checking room state.');
    if (this.state.id) {
      api.whosInRoom(this.state.id).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name);
          this.setState({
            joined: joinedPlayers,
          });
          const myPlayerNum = joinedPlayers.length;
          this.joinRoom(myPlayerNum);
        },
        (error) => {
          console.log('Room does not exist.');
          this.setState({
            id: null,
          });
        }
      );
    }
  };
  checkRoomState = () => {
    if (this.state.id) {
      api.whosInRoom(this.state.id).then(
        (players) => {
          const joinedPlayers = players.filter((p) => p.name);
          this.setState({
            joined: joinedPlayers,
          });
        },
        (error) => {
          console.log('Room does not exist.');
          this.setState({
            id: null,
          });
        }
      );
    }
  };
  getPlayerItem = (player) => {
    if (player) {
      if (player.id === this.state.myID) {
        return (
          <div>
            <div className="player-item">
              <Trans>You [connected]</Trans>
              <div className="player-ready"></div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="player-item">
              {player.name}
              <div className="player-ready"></div>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <div id="bars1">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
    }
  };
  copyToClipboard = () => {
    var textField = document.createElement('textarea');
    textField.innerText = this.gameLinkBox.innerText;
    textField.style.opacity = '0';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    this.setState({ copied: true });
    setTimeout(
      function () {
        this.setState({ copied: false });
      }.bind(this),
      1000
    );
  };
  gameExistsView = () => {
    const players = [0, 1];
    const server = APP_PRODUCTION
      ? `https://${window.location.hostname}`
      : WEB_SERVER_URL;
    return (
      <>
        <div className="game-link">
          <Trans>
            {this.props.isPublic ? 'Public lobby text' : 'Private lobby text'}
          </Trans>
          <br />
          <div
            className="game-link-box"
            ref={(gameLinkBox) => (this.gameLinkBox = gameLinkBox)}
          >
            {`${server}/lobby/${this.state.id}`}
          </div>
          <div className="menu-button small" onClick={this.copyToClipboard}>
            {this.state.copied ? 'Copied️!' : ' Copy '}
          </div>
        </div>
        {this.state.joined.length}{' '}
        <Trans>
          Out of the 2 required players are in the{' '}
          {this.props.isPublic ? 'public' : 'private'} lobby
        </Trans>
        <div className="game-code">{this.state.id}</div>:
        <div className="player-list">
          {players.map((p) => {
            const joinedPlayer = this.state.joined[p];
            return this.getPlayerItem(joinedPlayer);
          })}
        </div>
      </>
    );
  };
  gameNotFoundView = () => {
    return (
      <>
        <div>
          <Trans>Error 404. Lobby with this game code not found.</Trans>
          <br />
          <Link to="/">
            <Trans>Go back and create a new lobby.</Trans>
          </Link>
        </div>
      </>
    );
  };
  getGameClient = () => {
    return (
      <GameClient
        matchID={this.state.id}
        players={this.state.joined}
        playerID={String(this.state.myID)}
        credentials={this.state.userAuthToken}
      ></GameClient>
    );
  };
  render() {
    if (this.state.joined.length === 2) {
      return this.getGameClient();
    }
    return (
      <TemplatePage
        content={
          this.state.id ? this.gameExistsView() : this.gameNotFoundView()
        }
      />
    );
  }
}
export default Lobby;
