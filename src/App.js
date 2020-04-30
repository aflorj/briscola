import React from 'react';
import { deck } from './cards';

function App(props) {
  return deck.map(x => <img src={x.imagePath} alt={x.alt} />);
}

export default App;