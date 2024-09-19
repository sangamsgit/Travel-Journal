import Navbar from './MyComponents/Navbar'
import Cards from './MyComponents/Cards'
import data from './MyComponents/data'
import './App.css'

function App() {
  
  const cards = data.map(item => {
    return(
    <Cards 
    key={item.id}
    {...item}
    />
  )
  
  })


  return (
    <>
    <Navbar />
    {cards}
    </>
  )
}

export default App
