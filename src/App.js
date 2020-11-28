import React from 'react';
import { Switch, Route, useHistory } from 'react-router';
import Lobby from './lobby.js';
import { Client } from 'boardgame.io/react';
import { Briscola } from './GameLogic.js';
import Board from './Board.js';
import { Local } from 'boardgame.io/multiplayer';
import HomePage from "./homePage.js";
import JoinPage from "./joinPage.js";
import HelpPage from "./helpPage.js";
import RematchLobby from "./rematchLobby";

function App() {
  const history = useHistory();
  const BriscolaClient = Client({
    game: Briscola,
    board: Board,
    multiplayer: Local(),
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
        path="/join"
        exact
        render={(props) => <JoinPage {...props} history={history} />}
      />
      <Route
        path="/help"
        exact
        render={(props) => <HelpPage {...props} history={history} />}
      />
      <Route path="/demo" exact render={() => renderBriscolaClient()} />
      <Route path="/rematch" render={(props) => <RematchLobby {...props} key={Math.random()}/>} />
      <Route path="/lobby/:id" component={Lobby} />
      <Route
        path="*"
        render={(props) => <HomePage {...props} history={history} />}
      />
    </Switch>
  );
}

export default App;