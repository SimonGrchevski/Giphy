import React from 'react';
import { fetchGiphy } from '../redux/reducers/giphyReducer';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../redux/store';

const Giphy = () => {

  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);

  // let [state,changeState] = useState([]);
  

  
  (async()=> {
    const newS = await state;
    console.log(newS);
  })();
  const handleSubmit = ():void => {
    
    dispatch( fetchGiphy() );
  }
  return (
    <div>

    <form>
      <input type="text" placeholder="search gifs" />
      <input type="button" value ="search" onClick={() => handleSubmit()} /> 
    </form>

    <iframe src={state.giphs[0]} width="480" height="480" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-cats-shurly-l2JJDdD7cv4xdGGis">via GIPHY</a></p>
    </div>
    
  )
}

export default Giphy;