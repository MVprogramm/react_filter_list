import React from "react";

import User from "./User.jsx";
import Filter from "./Filter.jsx";

import "./usersList.scss";

class UsersList extends React.Component {
  state = {
    filterText: '',
  }
  
  onChange = (event) => {
    this.setState({
      filterText: event.target.value,
    })
  }

  render() {
    let usersList = this.props.users;
    if (this.state.filterText) {
      usersList = this.props.users
        .filter(
          (user) => user.name
            .toUpperCase()
            .includes(this.state.filterText.toUpperCase())
        );
    }

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          onChange={this.onChange}
          count={usersList.length}
        />

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
