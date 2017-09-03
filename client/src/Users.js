import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Users extends Component {
  state = {users: []}

  handleclick(){
    console.log(this)
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div onClick={this.handleclick} className="Users">
        <h1 >Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default Users;
