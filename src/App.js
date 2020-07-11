import React from 'react';
import { Switch, Route, useHistory } from 'react-router';
import Lobby from './lobby.js';
import { Client } from 'boardgame.io/react';
import { APP_PRODUCTION, GAME_SERVER_URL } from "./config.js";
import { Briscola } from './GameLogic.js';
import { Board } from './Board.js';
import { SocketIO } from 'boardgame.io/multiplayer';
import HomePage from "./homePage.js";
import HelpPage from "./helpPage.js";
import JoinPage from "./joinPage.js";

function App() {
  const history = useHistory();
  const server = APP_PRODUCTION
    ? `https://${window.location.hostname}`
    : GAME_SERVER_URL;
  const BriscolaClient = Client({
    game: Briscola,
    board: Board,
    multiplayer: SocketIO({ server: server }),
  });
  const renderBriscolaClient = () => {
    return <BriscolaClient playerID="0"></BriscolaClient>;
  };
  return (
    <Switch>
      <Route
        path="/home"
        exact
        render={(props) => <HomePage {...props} history={history} />}
      />
      <Route
        path="/help"
        exact
        render={(props) => <HelpPage {...props} history={history} />}
      />
      <Route
        path="/join"
        exact
        render={(props) => <JoinPage {...props} history={history} />}
      />
      <Route path="/play" exact render={(props) => renderBriscolaClient()} />
      <Route path="/lobby/:id" component={Lobby} />
      <Route
        path="*"
        render={(props) => <HomePage {...props} history={history} />}
      />
    </Switch>
  );
}

export default App;