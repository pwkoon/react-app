import React from 'react'
import Gif from './Gif';

interface Gif {
  id: string;
}

interface Props {
  gifs: Array<Gif>;
  onClick: (event: any) => void;
}

const GifList = ({gifs, onClick}: Props) => {
  return (
    <div className='gif-list'>
      {gifs.map(gif =>
        {return <Gif id={gif.id} key={gif.id} onClick={onClick} />}
      )}
    </div>
  )
}

export default GifList
