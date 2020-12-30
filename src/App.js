import React from 'react';
import { Switch, Route, useHistory } from 'react-router';
import Lobby from './Lobby.js';
import { Client } from 'boardgame.io/react';
import { Briscola } from './gameLogic.js';
import Board from './Board.js';
import { Local } from 'boardgame.io/multiplayer';
import HomePage from './HomePage.js';
import JoinPage from './JoinPage.js';
import RematchLobby from './RematchLobby.js';

function App() {
  const history = useHistory();
  const BriscolaClient = Client({
    game: Briscola,
    board: Board,
    multiplayer: Local(),
  });
  const renderBriscolaClient = () => {
    return <BriscolaClient playerID="0" demo="true"></BriscolaClient>;
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