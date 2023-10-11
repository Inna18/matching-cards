import "./SingleCard.css";

export default function SingleCard({card, handleChoice, flipped}) {

  const handleClick = (card) => {
    handleChoice(card);
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img className="back" src="./img/cover.png" alt="back" onClick={() => handleClick(card)}/>
      </div>
    </div>
  )
}
