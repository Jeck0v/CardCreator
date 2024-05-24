import CardCost from './CardCost.jsx'
import CardEffect from './CardEffect.jsx'

function Card({ name, cost, artwork, type, effect, keywords }) {
  return (
    <div className="card box">
      <img className="card-artwork" src={artwork} alt="artwork"/>
      <div className="card-header">
        <div className="card-group">
          <span className="card-type">{type}</span>
          <span className="card-name">{name}</span>
        </div>
        <CardCost amount={cost} />
      </div>
      <CardEffect description={effect} keywords={keywords}/>
    </div>
  )
}

export default Card
