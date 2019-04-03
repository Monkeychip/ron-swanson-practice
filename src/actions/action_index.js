import { FETCH_QUOTE, ADD_ROW } from "./types";


export function fetchData() {

  return (dispatch) => {
    // fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    //   .then(response => {
    //     return response;
    //   })
    //   .then(response => response.json())
    //   .then(items => dispatch(fetchQuote(items)))
  };
}

export function fetchQuote(quote) {
  return {
    type: FETCH_QUOTE,
    payload: quote
  };
}

export function addRowToList(data) {
  return {
    type: ADD_ROW,
    payload: data
  }
}

export function addRowReturnNewQuote(data) {
 return (dispatch) => {
  dispatch(addRowToList(data))
  dispatch(fetchData())
 }
}
