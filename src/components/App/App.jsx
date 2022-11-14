import React, { Component } from "react";

import { PropTypes } from 'prop-types';



export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };



  render() {
    return <Section title="Please leave feedback"/>;
  }
}


App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })
}