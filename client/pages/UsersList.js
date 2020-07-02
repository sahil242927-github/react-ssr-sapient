import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../src/actions';

class UsersList extends Component {
  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        Here is list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData,
};

//export default connect(mapStateToProps, { fetchUsers })(UsersList);
