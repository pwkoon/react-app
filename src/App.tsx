import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Burger", "French fries", "Coke", "Mc Spicy", "Mc Flurry"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading='Food' onSelectItem={handleSelectItem} />
    </div>
  )


}

export default App;
