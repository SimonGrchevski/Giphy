const GET_GIPHY = 'GET_GIPHY';

export const getGiphy = (count:Object) => ({
  type: GET_GIPHY,
  count,
});

const reducer = (state = [], action:any) => {
  switch (action.type) {

    case GET_GIPHY: {
      return action.payload
    }
    default:
      return state;
  }
};

export const fetchGiphy = () => async (dispatch:Function) => {
  let res = await fetch('api.giphy.com/v1/gifs/search?api_key=796IQ3La6LmtLD65f2T9BwCP1IvvkkPL&q=cats');
  const r = await res.json();
  dispatch(getGiphy(r))
}

export default reducer;