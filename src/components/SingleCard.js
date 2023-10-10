import "./SingleCard.css";

export default function SingleCard({card}) {
  return (
    <div className="card">
      <img className="front" src={card.src} alt="front" />
      <img className="back" src="./img/cover.png" alt="back" />
    </div>
  )
}