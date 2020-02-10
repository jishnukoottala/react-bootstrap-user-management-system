import React from "react";
import UsersList from "./UsersList";
import Paginate from "./Pagination";

// const Welcome = () => {
//   return (
//     <div>
//       <h1>Welcome</h1>
//     </div>
//   );
// };

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      currentUsers: [],
      currentPage: 1,
      userPerPage: 3
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        this.setState(
          {
            users: json
          },
          () => {
            this.setState({
              currentUsers: this.state.users.slice(0, 3)
            });
          }
        );
      });
  }

  onChangePage = page => {
    const { userPerPage, users } = this.state;
    //debugger;
    console.log(page);
    this.setState({
      currentPage: page
    });
    const last = page * userPerPage;
    const first = last - userPerPage;
    this.setState({ currentUsers: users.slice(first, last) });
  };

  render() {
    const { users, currentUsers, userPerPage, currentPage } = this.state;

    return (
      <div className="p-4">
        <UsersList users={currentUsers} />
        <div className="justify-content-center">
          <Paginate
            totalPages={Math.ceil(users.length / userPerPage)}
            currentPage={currentPage}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Welcome;
