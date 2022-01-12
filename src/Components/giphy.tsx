import React from 'react';
import { fetchGiphy } from '../redux/reducers/giphyReducer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Giphy = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    
  },[])

  const handleSubmit = ():any => {
    dispatch( fetchGiphy() );
  }
  return (
    <form onSubmit={ handleSubmit() }>
      <input type="text" placeholder="search gifs" />
      <input type="submit" value ="search" /> 
    </form>
    
  )
}

export default Giphy;