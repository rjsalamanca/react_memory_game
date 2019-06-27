import React, { Component } from 'react';

import MemoryCard from './MemoryCard';

import './App.css';
import './MemoryCard.css';

function generateDeck(){
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  const deck = [];

  for(let i = 0; i < 16; i++){
    deck.push({'isFlipped' : false, 'symbol':symbols[i%8]})
  }
  shuffle(deck);
  
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends Component {
  state = {
    deck: generateDeck(), 
    pickedCards: []
  }
  
  pickCard(cardIndex){
    if (cardIndex === this.state.deck[cardIndex]) {
      return;
    }

    const cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;

    const newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map((card,ind) => 
      (cardIndex === ind) ? cardToFlip : card
    );

    this.setState({deck: newDeck, pickedCards: newPickedCards});
    console.log('test')
  }

  render(){
    const cardsJSX = this.state.deck.map((card,ind) => 
      <MemoryCard key={ind} pickCard={this.pickCard.bind(this,ind)} isFlipped={card.isFlipped} symbol={card.symbol}/>
    );
    return (
      <div className="App">
          <header className="App-header">
          <h1>Memory Game</h1>
          <p className="App-subtitle">
            Match cards to win.
          </p>
        </header>
        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;