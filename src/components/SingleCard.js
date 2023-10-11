import "./SingleCard.css";

export default function SingleCard({card, handleChoice}) {

  const handleClick = (card) => {
    handleChoice(card);
  }

  return (
    <div className="card">
      <img className="front" src={card.src} alt="front" />
      <img className="back" src="./img/cover.png" alt="back" onClick={() => handleClick(card)}/>
    </div>
  )
}
