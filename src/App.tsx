import { useState } from 'react'
import reactLogo from './assets/react.svg'
import giphy from 'giphy-api';
// import dotenv from 'dotenv'
import './App.css'
import SearchBar from './components/SearchBar';
import Gif from './components/Gif';
import GifList from './components/GifList';
// dotenv.config();


function App() {
  const [selectedGif, setSelectedGif] = useState('U8iiB9GBdt5t9n1I6J');
  const [gifList, setGifList] = useState([] as any);

  // const gifs = [
  //   {id: "U8iiB9GBdt5t9n1I6J"},
  //   {id: "kCVIL0CLNWv2E"}
  // ]
  const search = (query:string) => {
    giphy(import.meta.env.VITE_REACT_APP_GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
  }, (error, response) => {
      setGifList(response.data)
  });
  }

  return (
    <div>
      <div className="left-scene">
        <SearchBar onChange={(event) => search((event.target as HTMLInputElement).value)} />
        <div className="selected-gif">
          <Gif id={selectedGif}/>
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifList}  onClick = {(event: any) => setSelectedGif(event.target.src.slice(31,-10))}/>
      </div>
    </div>
  )
}

export default App;
