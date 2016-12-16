import React, { Component } from 'react';

// Every _class based_ component has its own state object.
// In a class based component, props are available anywhere - in any method we
// define - as this.props.
class SearchBar extends Component {

  // init state in a class based component
  constructor(props) {
    // setup (init vars and state ..)
    // super calls parent method on parent class (Component)
    super(props);

    // state is a plain js object, that exists on any class based component.
    // Only inside of the constructor function we change state like this:
    this.state = {
      // properties we want to record on state
      term: ''
    };
    // Everywhere else (inside all our components) we use this.setState()!!!!
  }

  // Every "class based" React component must have a defined render method!
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term} // input is turned into a _controlled_ component* here
          onChange={event => this.onInputChange(event.target.value)}
        />
        <br />
        Value of input: {
          // Because component is re-rendered by "this.setState() onChange", this works!
          this.state.term
        }
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  /*/ Event handler: "handleElementEvent"
  onInputChange(event) {
    // console.log(event.target.value);
    console.log(event);
  }*/
}

export default SearchBar;

// * A controlled component has its value set by state.
//   So its value only ever changes when its state changes!
//   This is how we handle data with react.
//   We say: The value of the input is equal to the state.
//   This is an easier way to handle attributes, i.e. default inputs, and
//   it's easier to read the value, instead of using jQuery for example.
