import React, { useRef, useEffect }  from 'react';
import { fetchGiphy,fetchMoreGiphy } from '../redux/reducers/giphyReducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';
import { GiphyList } from './giphyList';

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

  useEffect(() => {
    dispatch(fetchGiphy('happy'));
  },[]);

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
    <>
      <header className="sticky-top d-flex justify-content-center p-5">
        <input type="text" className="input-queue w-25 p-1 rounded outline-border-none" 
          placeholder="search gifs"  onChange={(e) => queue.current = e.target.value}/>
        <input type="button" className="search-btn outline-border-none rounded p-2" value ="search" onClick= {() => handleSubmit() }/> 
      </header>
      <main>
        <GiphyList giphs={data} />
      </main>

    </>

    
  )
}

export default Giphy;