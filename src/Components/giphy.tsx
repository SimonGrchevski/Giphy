import React from 'react';
import { fetchGiphy} from '../redux/reducers/giphyReducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';
import { GiphyList } from './giphyList';
import { useRef } from 'react';


export let shouldLoad = true;
const Giphy = () => {

  const dispatch = useDispatch();
  const offSet = useRef(0);
  const { data } = useSelector((state: State) => state.giphs);

  const handleSubmit = ():void => {
    dispatch( fetchGiphy('d',offSet.current) );
  }
  
  const resetLoading = () => {
    setTimeout( () => {
      shouldLoad = true;
    },3000)
  }

  window.addEventListener('scroll',() => {
    if(shouldLoad)
    {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight){
        offSet.current+=10;
        dispatch( fetchGiphy('d', offSet.current));
        shouldLoad = false;
        resetLoading();
      }
    }
  });

  return (
    <div>

    <form>
      <input type="text" className="queue" 
        placeholder="search gifs"/>
      <input type="button" value ="search" onClick= {() => handleSubmit() }/> 
    </form>
    

    <GiphyList giphs={data} />

    
    </div>
    
  )
}

export default Giphy;