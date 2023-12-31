import './App.css';
import {useEffect, useState} from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { "src": "./img/helmet-1.png", matched: false },
  { "src": "./img/potion-1.png", matched: false },
  { "src": "./img/ring-1.png", matched: false },
  { "src": "./img/scroll-1.png", matched: false },
  { "src": "./img/shield-1.png", matched: false },
  { "src": "./img/sword-1.png", matched: false },
]

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [isDisabled, setDisabled] = useState(false);

  // shuffleCards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => { return {...card, id: Math.random()} });

    setChoiceOne(null);
    setChoiceTwo(null);

    setCards(shuffledCards);
    setTurns(0);
  }

  // make a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("match!");
        setCards(prevState => {
          return prevState.map(card => {
            if (card.src === choiceOne.src || card.src === choiceTwo.src) {
              return {...card, matched: true}
            } else {
              return card;
            }
          })
        });
        resetTurn();
      } else {
        console.log("don't match!");
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, [])

  // reset turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevState => prevState + 1);
    setDisabled(false);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard key={card.id}
                      card={card}
                      handleChoice={handleChoice}
                      flipped={card === choiceOne || card === choiceTwo || card.matched}
                      disabled={isDisabled}/>
        ))}
      </div>

      <h4>Number of Turns: {turns}</h4>
    </div>
  )
}

export default App;
