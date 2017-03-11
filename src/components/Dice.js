import React from 'react';
import {graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Dice extends React.Component {
  static propTypes = {
  	data: React.PropTypes.shape({
  		loading: React.PropTypes.bool,
  		errors: React.PropTypes.object,
  		quoteOfTheDay: React.PropTypes.string,	
  	}).isRequired,
  };

  render() {


  	if (this.props.data.error) {
  		return(<div>Error!</div>)
  	}

    return (
      <div>{this.props.quoteOfTheDay}</div>
    );
  }
}

const QuoteQuery = gql`
	query {
  		quoteOfTheDay
	}
`

const DicewithData = graphql(QuoteQuery)(Dice);

export default DicewithData