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

  unflipCards(card1Index, card2Index){
    const card1 = {...this.state.deck[card1Index]};
    const card2 = {...this.state.deck[card2Index]};
  
    card1.isFlipped = false;
    card2.isFlipped = false;
  
    const newDeck = this.state.deck.map((card,ind) => 
      card1Index === ind ? card1 : card2Index === ind ? card2 : card
    );
    console.log('New Deck:', newDeck)
    // this.setState({deck: newDeck});
    // console.log('State Deck:', this.state.deck)
    this.setState({deck:newDeck})

  }
  
  async pickCard(cardIndex){
    if (cardIndex === this.state.deck[cardIndex]) {
      return;
    }

    const cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card,ind) => 
      (cardIndex === ind) ? cardToFlip : card
    );

    if(newPickedCards.length == 2){
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];

      if(newDeck[card1Index].symbol != newDeck[card2Index].symbol){
        console.log('DOES NOT MATCH')
        console.log(newDeck[card1Index].symbol,newDeck[card2Index].symbol)
        setTimeout(()=> {
          this.unflipCards(card1Index,card2Index)
        },1000)     
      } else {
        console.log('matches')
      }
      newPickedCards = [];
    }

    this.setState({deck: newDeck, pickedCards: newPickedCards});
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