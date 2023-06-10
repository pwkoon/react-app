import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from "./components/ListGroup";
import Alert from './components/alert';
import Button from './components/button';

function App() {
  let items = ["Burger", "French fries", "Coke", "Mc Spicy", "Mc Flurry"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, setAlertVisibility] = useState(false)

  return (
    <div>
      <ListGroup items={items} heading='Food' onSelectItem={handleSelectItem} />
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        My first button
      </Button>
    </div>
  )
}

export default App;
