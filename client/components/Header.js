import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends Component {
  render() {
    console.log(this.props.data);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left" style={{paddingLeft: '15px'}}>
            Home
          </Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);
