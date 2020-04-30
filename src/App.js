import React from 'react';
import { shuffledDeck } from './cards';

function App(props) {
  return shuffledDeck.map(x =>
  <img src={x.imagePath} alt={x.alt} />);
}

export default App;