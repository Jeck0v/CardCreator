import { useState } from 'react'
import Card from './components/Card.jsx'
import Config from './components/Config.jsx'
import artwork from './assets/dragono.webp'

function App() {

  const [cost, setCost] = useState(2)
  const [name, setName] = useState("Dracopop")
  const [desc, setDesc] = useState("Envoie une boule dracopesque qui inflige -2PV.")
  const [type, setType] = useState("dragon")
  const [artwork, setArtwork] = useState("https://th.bing.com/th/id/R.8c99990425d062b7d268113585d8790c?rik=J5stq%2fjvOArtWQ&pid=ImgRaw&r=0")
  const cardDetails = {
    name: 'Dracopop',
    artwork: artwork,
    type: 'Dragon',
    effect: 'Lance une boule dracopesque',
    keywords: ['dégâts']
  }

  const costChangeHandler = (event) => {
    // préconditions
    const value = Number(event.target.value)
    if(value < 0) {
      throw new Error(`Le coût ne peut pas être inféreieur à 0`)
    }

    setCost(value)
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value)
  }

  const effectChangeHandler = (event) => {
    setDesc(event.target.value)
  }

  const typeChangeHandler = (event) => {
    setType(event.target.value)
  }

  const artworkChangeHandler = (event) => {
    setArtwork(event.target.value)
  }

  return (
    <div className="app">

      <Card
        name={name}
        cost={cost}
        artwork={artwork}
        type={type}
        effect={desc}
        keywords={cardDetails.keywords} />

      <Config
        name={name}
        cost={cost}
        artwork={artwork}
        type={type}
        effect={desc}
        onNameChange={nameChangeHandler}
        onCostChange={costChangeHandler}
        onTypeChange={typeChangeHandler}
        onArtworkChange={artworkChangeHandler}
        onEffectChange={effectChangeHandler}
      />

    </div>
  )
}

export default App
