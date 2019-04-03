import { combineReducers } from "redux";

import fetchQuoteReducer from "./reducer_fetchQuote";
import addRowToList from "./reducer_addRowToList";

const appReducer = combineReducers({
  quote: fetchQuoteReducer,
  row: addRowToList
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
