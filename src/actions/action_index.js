import { FETCH_QUOTE, ADD_ROW } from "./types";

export function fetchData() {
  /**
   * Don't get overwhelmed here with the code. 
   * This is JavaScript
   * The commented code below is what request Ron Swanson quotes.
   * You might notice it is the same URL as the URl we visited via the browser.
   * This API call is "fetching" the data and then sending off the response (i.e. the quote)
   * to the next file that is displaying it.
   */

  return (dispatch) => {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        /**
         * Uncomment row 22 so that you console log the response.
         */

        // console.log('the returned quote ',response); 
        return response;
      })
      .then(response => response.json()) // turning the response into something readable
      .then(items => dispatch(fetchQuote(items))) // pushing the quote to another part of the app that displays it
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
  };
}

export function addRowReturnNewQuote(data) {
 return (dispatch) => {
  dispatch(addRowToList(data))
  dispatch(fetchData())
 };
}
