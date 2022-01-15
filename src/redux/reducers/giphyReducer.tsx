import { Dispatch } from "redux";
const GET_GIPHY = 'GET_GIPHY';

interface Action {
  type: string,
  payload: string[]
}


export const getGiphy = (payload:string[]) => ({
  type: GET_GIPHY,
  payload
});


const reducer = (state:string[] = [], action: Action) => {
  switch (action.type) {

    case GET_GIPHY: {
      console.log(action.payload)
      return state.concat(...action.payload);
    }
    default:
      return state;
  }
};

export const fetchGiphy = () => async (dispatch: Dispatch) => {
  let res = await fetch('https://api.giphy.com/v1/gifs/search?api_key=796IQ3La6LmtLD65f2T9BwCP1IvvkkPL&q=cats&limit=10&offset=10',
  { headers : 
    { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  const r = await res.json();
  const giphs: string[] = r.data.map((f: any) => f.embed_url);
  dispatch(getGiphy(giphs));
}

export default reducer;