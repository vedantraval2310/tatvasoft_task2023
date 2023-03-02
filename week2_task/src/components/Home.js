import React, { Component } from 'react';
import Userlist from './Userlist';
import HOC from './HOC';

const users = [
  { id: 12002080501067, name: 'Simran' },
  { id: 12002080501073, name: 'Vedant' },
  { id: 12102080503004, name: 'Mitali' },
];

const UserListWithHOC = HOC(Userlist, { users });

class Home extends Component {
  render() {
    return (
      <div>
        <UserListWithHOC />
      </div>
    );
  }
}

export default Home;
