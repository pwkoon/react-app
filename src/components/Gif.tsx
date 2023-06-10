import React from 'react'
import { MouseEventHandler } from 'react';

interface Props {
  id: string;
  onClick?: (event: any) => void;
}

const Gif = ({id, onClick}: Props) => {
  const src = `https://media4.giphy.com/media/${id}/giphy.gif`
  return (
    <img src={src} alt="" className="gif" onClick={onClick} />
  )
}

export default Gif
