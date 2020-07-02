import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../src/actions';

const Home = (props) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUsers = () => {
    return props.users.map((user) => <li key={user.id}>{user.name}</li>);
  };

  return (
    <div>
      Here is list of users
      <ul>{renderUsers()}</ul>
    </div>
  );
};

const loadData = (store) => {
  return store.dispatch(fetchUsers());
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default {
  component: connect(mapStateToProps, { fetchUsers })(Home),
  loadData,
};
