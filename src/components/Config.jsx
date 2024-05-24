function Config({
  name,
  cost,
  artwork,
  type,
  effect,
  onNameChange,
  onCostChange,
  onArtworkChange,
  onTypeChange,
  onEffectChange
}) {

  return (
     <form className="config box">
        <div className="config-line">
          <input className="config-name" type="text" value={name} onChange={onNameChange} placeholder="Nom de la carte"/>
          <input className="config-cost" type="number" value={cost} onChange={onCostChange} />
        </div>
        <div className="config-line">
          <input type="url" className="config-artwork" placeholder="https://example.com/artwork.jpg" onChange={onArtworkChange} />
        </div>
        <select className="config-type" onChange={onTypeChange}>
          <option>dragon</option>
          <option>sorcier</option>
          <option>ninja</option>
          <option>pirate</option>
          <option>barbare</option>
        </select>
        <textarea className="config-description" placeholder="Description de l'effet" onChange={onEffectChange}>
          {effect}
        </textarea>
      </form>
  )
}

export default Config
