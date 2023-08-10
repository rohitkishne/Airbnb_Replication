import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import data from "./data"
function App() {
  const cards = data.map((card) => {
    return (
        <Card
          key = {card.id}
          //Shortcut to pass the props down to the compoent 
          //First way to make a new property ----------> like item
          item = {card}
          //Second way to spread the card properties here 
          // {...card}

          //Third way ----> write all the properties of card data ---> make lengthier if the properties are more and get messy
          // img = {card.coverImg}
          // rating = {card.stats.rating}
          // reviewCount = {card.stats.reviewCount}
          // location = {card.location}
          // title = {card.title}
          // price = {card.price}
          // openSpots = {card.openSpots}
        />
    )
  })
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='card-section'>
        {cards}
      </section>
    </> 
  )
}

export default App
