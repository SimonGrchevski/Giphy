const GET_GIPHY = 'GET_GIPHY';

interface Payload {
  queue: string,
  offset: number
};

interface Action {
  type: string,
  payload: Payload
}


export const getGiphy = (payload: Payload) => ({
  type: GET_GIPHY,
  payload
});

const reducer = (state = [], action: Action) => {
  switch (action.type) {

    case GET_GIPHY: {
      return action.payload;// action.payload.queue
    }
    default:
      return state;
  }
};

export const fetchGiphy = () => async (dispatch:Function) => {
  let res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=796IQ3La6LmtLD65f2T9BwCP1IvvkkPL&q=cats&limit=10&offset=10',{ headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }});
  const r = await res.json();
  dispatch(getGiphy(r))
}

export default reducer;