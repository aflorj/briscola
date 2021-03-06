import { GAME_NAME, GAME_SERVER_URL, APP_PRODUCTION } from './config.js';
import ky from 'ky';
const server = APP_PRODUCTION
  ? `https://${window.location.hostname}`
  : GAME_SERVER_URL;

export class LobbyAPI {
  constructor() {
    this.api = ky.create({
      prefixUrl: `${server}/games/${GAME_NAME}`,
    });
  }
  async createRoom(numPlayers, unlisted) {
    const payload = { numPlayers: numPlayers, unlisted: unlisted };
    const data = await this.api.post('create', { json: payload }).json();
    return data.matchID;
  }
  async joinRoom(matchID, username, userid) {
    const payload = { playerID: userid, playerName: username };
    const data = await this.api
      .post(matchID + '/join', { json: payload })
      .json();
    const { playerCredentials } = data;
    return playerCredentials;
  }
  async leaveRoom(matchID, userid, playerCredentials) {
    const payload = { playerID: userid, credentials: playerCredentials };
    try {
      await this.api.post(matchID + '/leave', { json: payload }).json();
    } catch (error) {
      console.log('error in leaveRoom: ', error);
    }
  }
  async whosInRoom(matchID) {
    const data = await this.api.get(matchID).json();
    return data.players;
  }
  async playAgain(matchID, userid, playerCredentials) {
    const payload = { playerID: userid, credentials: playerCredentials };
    const data = await this.api
      .post(matchID + '/playAgain', { json: payload })
      .json();
    const { nextMatchID } = data;
    return nextMatchID;
  }
  async listAllPublicGames() {
    const data = await this.api.get('').json();
    return data;
  }
}
