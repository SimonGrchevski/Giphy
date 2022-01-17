import { Dispatch } from "redux";
const GET_GIPHY = 'GET_GIPHY';

interface Giphs {
  url: string;
  id: string;
}

interface State{
  data: Giphs[];
}

interface Action {
  type: string,
  payload: Giphs[]
}

export const getGiphy = (payload: Giphs[]) => ({
  type: GET_GIPHY,
  payload
});

const reducer = (state: State = {data:[]} , action: Action) => {
  switch (action.type) {

    case GET_GIPHY: {
      console.log({...state,data:[...state.data,...action.payload] })
      return {...state,data:[...state.data,...action.payload] };
    }
    default:
      return state;
  }
};

export const fetchGiphy = (queue:string, offSet:number) => async (dispatch: Dispatch) => {
  let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=796IQ3La6LmtLD65f2T9BwCP1IvvkkPL&q=${queue}&limit=10&offset=${offSet}`,
  { headers : 
    { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const r = await res.json();
  const giphs: Giphs[] = r.data.map((f: any) => { return {url:f.embed_url, id:f.id}});
  dispatch(getGiphy(giphs));
}

export default reducer;