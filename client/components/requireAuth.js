import React, { Component } from 'react';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      // const { loading, user } = this.props.data;
      // this.props is the old set of props before the query updates
      // which still has a logged in user
      // newProps has no user because they've been logged out
      const { loading, user } = nextProps.data;
      if (!loading && !user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(query)(RequireAuth);
};
