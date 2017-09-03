var React = require('react');

var Users = React.createClass({
  getInitialState: function() {
    return {
      users: []
    };
  },
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  },
  render: function() {
    return (
        <div className="Users">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.name} <br> {user.phone}</br> <br> {user.email} </br></div>
          )}
        </div>
    );
  }
});

module.exports = Users;