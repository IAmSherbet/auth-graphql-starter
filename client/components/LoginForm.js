import React, { Component } from 'react';
import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import { graphql } from 'react-apollo';

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    })
  }

  render() {
    return (
      <div>
        <h4>Login</h4>
        <AuthForm onSubmit={this.onSubmit.bind(this)}/>
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);