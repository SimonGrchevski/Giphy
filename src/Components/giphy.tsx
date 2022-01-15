import React from 'react';
import { fetchGiphy } from '../redux/reducers/giphyReducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';
import { GiphyList } from './giphyList';

const Giphy = () => {

  const dispatch = useDispatch();
  const giphs = useSelector((state: State) => state.giphs);

  const handleSubmit = ():void => {
    
    dispatch( fetchGiphy() );
  }
  return (
    <div>

    <form>
      <input type="text" placeholder="search gifs" />
      <input type="button" value ="search" onClick={() => handleSubmit()} /> 
    </form>

    <GiphyList giphs={giphs} />

    
    </div>
    
  )
}

export default Giphy;