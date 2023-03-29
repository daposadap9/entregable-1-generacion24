import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"

function App() {

  const images =["bg1","bg2","bg3","bg4"]
  const planets=["planeta1","planeta2","planeta3","planeta4"]

  const getRandomItem = (listItems) => {
    const randomIndex =  Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]   
  }

  const [quote, setQuote] = useState(getRandomItem(db))
  const [bgImage, setBgImage] = useState(getRandomItem(images))
  const [planet, setPlanet] = useState(getRandomItem(planets))

  const handleNewQuote = () =>{
    setQuote(getRandomItem(db))
    setBgImage(getRandomItem(images))
    setPlanet(getRandomItem(planets))
  }
  console.log(db)

  return (
    <div className={`App ${bgImage}`}>
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote}/>
      <img className='image' src={`/images/${planet}.png `} alt="" />
    </div>
    
  )
}

export default App
