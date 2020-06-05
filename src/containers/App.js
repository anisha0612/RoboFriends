import React, { Component } from "react";
// import { connect } from "react-redux";
import CardList from "../components/CardList";
import { robots } from "../components/robots";
import SearchBox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
// import { setSearchField } from "../actions";

// const mapStateToProps = (state) => {
//   return {
//     searchField: state.setSearchField.searchField,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//   }
//   };

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    //changing the value of prop in a state
    this.setState({ searchfield: event.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <header>
            <h1 className="ttu pa3 pb4 f1">RoboFriends</h1>
          </header>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
