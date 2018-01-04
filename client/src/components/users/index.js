var React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');

var Users = React.createClass({
  getInitialState: function() {
    return {
      members: []
    };
  },
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(members => this.setState({ members: members }));
  },
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    },
  render: function() {
    return (
        <div className="Users container">
          <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <input onChange={this.logChange} className="form-control" value='' placeholder='John' name='name' validations={['required']}/>
                    <label>Email</label>
                    <input onChange={this.logChange} className="form-control" value='' placeholder='email@email.com' name='email' validations={['required', 'email']}/>
                    <div className="submit-section">
                        <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                    </div>
                </form>
            </div>
          <h1>Users</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Member name</th>
              <th>Member email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.state.members.map(member =>
                <tr key={member.id}>
                  <td>{member.name} {member.surname}</td>
                  <td>{member.email}</td>
                  <td><button className="btn btn-primary">Edit</button> <button className="btn btn-danger">Delete</button></td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
});

module.exports = Users;