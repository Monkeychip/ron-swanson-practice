import { Component } from "react";
import * as React from 'react';

import "../App.css";
import QuoteRow from "../container/quote_row";
import AddQuote from "../container/add_quote";

class QuoteContainer extends Component {

  render() {
    return (
      <div className="ui container">
        <div className="four wide column center aligned">
          <AddQuote />
        </div>
          <QuoteRow />
      </div>
    );
  }
}

export default QuoteContainer;


