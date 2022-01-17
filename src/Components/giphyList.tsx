import React from 'react';

interface Giphs {
  url: string;
  id: string;
}

export const GiphyList = (props: any) => {
  const getGiphs = (giphs: Giphs[]) => {
    return giphs.map((giph: Giphs) => <li key={giph.id}><iframe src={giph.url} width="480" height="480" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-cats-shurly-l2JJDdD7cv4xdGGis"></a></p></li>);
  }
  const giphs = getGiphs(props.giphs);
  return (
    <ul>
      {giphs.length !==0 ? giphs : <h1>No gifs found!</h1>}
    </ul>
    
  )
}
