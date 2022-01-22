import { Dispatch } from "redux";
const GET_GIPHY = 'GET_GIPHY';
const NEW_GIPHY = 'NEW_GIPHY';

const api_link = "https://api.giphy.com/v1/gifs/search?api_key=796IQ3La6LmtLD65f2T9BwCP1IvvkkPL&q=";
const headers = { 'Content-Type': 'application/json','Accept': 'application/json'};

const mapGiphs = (giphs: any): Giphs[] => {
  return giphs.data.map((g: any) => { return {url:g.embed_url, id:g.id}});
}

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

export const newGiphy = (payload: Giphs[]) => ({
  type: NEW_GIPHY,
  payload
});

const reducer = (state: State = {data:[]} , action: Action) => {
  switch (action.type) {

    case GET_GIPHY: {

      return {...state,data:[...state.data,...action.payload] };
    }
    case NEW_GIPHY: {
      return {...state,data:[...action.payload] };
    }
    default:
      return state;
  }
};

export const fetchGiphy = (queue:string) => async (dispatch: Dispatch) => {
  let res = await fetch(`${api_link}${queue}&limit=10&offset=0`,{ headers : headers });
  const r = await res.json();
  dispatch(newGiphy(mapGiphs(r)));
}

export const fetchMoreGiphy = (queue:string, offSet:number) => async (dispatch: Dispatch) => {
  let res = await fetch(`${api_link}${queue}&limit=10&offset=${offSet}`,{ headers : headers });
  const r = await res.json();
  dispatch(getGiphy(mapGiphs(r)));
}

export default reducer;