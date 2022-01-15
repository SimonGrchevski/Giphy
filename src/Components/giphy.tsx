import React from 'react';
import { fetchGiphy } from '../redux/reducers/giphyReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store';

import { useState } from 'react';

const Giphy = () => {

  const useAppDispatch = () => useDispatch<AppDispatch>();
  let [state,changeState] = useState([]);
  
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  
  (async()=> {
    await store;
  // changeState(store.data[0]);
    console.log(giphy);
  })();
  const handleSubmit = ():any => {
    
    dispatch( fetchGiphy() );
  }
  return (
    <div>

    <form>
      <input type="text" placeholder="search gifs" />
      <input type="button" value ="search" onClick={() => handleSubmit()} /> 
    </form>

    <iframe src="" width="480" height="480" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-cats-shurly-l2JJDdD7cv4xdGGis">via GIPHY</a></p>
    </div>
    
  )
}

export default Giphy;