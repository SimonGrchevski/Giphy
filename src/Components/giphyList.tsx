import React from 'react';

interface Props {
  giphs :string[]
}

export const GiphyList = (props: Props) => {

  const getGiphs = (giphs: string[]) => {
    return giphs.map((giph: string) => <li key={giph}><iframe src={giph} width="480" height="480" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-cats-shurly-l2JJDdD7cv4xdGGis"></a></p></li>);
  }

  return (
    <ul>
      {getGiphs(props.giphs)}
    </ul>
  )
}
