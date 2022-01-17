import React from 'react';
import { fetchGiphy,fetchMoreGiphy } from '../redux/reducers/giphyReducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';
import { GiphyList } from './giphyList';
import { useRef } from 'react';

const Giphy = () => {

  const dispatch = useDispatch();
  const offSet = useRef(10);
  const queue = useRef("");
  const shouldLoad = useRef(true);

  const { data } = useSelector((state: State) => state.giphs);

  const handleSubmit = ():void => {
    dispatch(fetchGiphy(queue.current));
  }
  
  const resetLoading = () => {
    setTimeout( () => {
      shouldLoad.current = true;
    },3000)
  }

  window.addEventListener('scroll',() => {
    if(shouldLoad.current)
    {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
        offSet.current+=10;
        dispatch( fetchMoreGiphy(queue.current, offSet.current) );
        shouldLoad.current = false;
        resetLoading();
      }
    }
  });

  return (
    <div>

    <form>
      <input type="text" className="queue" 
        placeholder="search gifs" onChange={(e) => queue.current = e.target.value}/>
      <input type="button" value ="search" onClick= {() => handleSubmit() }/> 
    </form>
    

    <GiphyList giphs={data} />

    
    </div>
    
  )
}

export default Giphy;