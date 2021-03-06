import React, { Component } from 'react';

// promote component (react) to container (redux) [1]
import { connect } from 'react-redux';

// action creator
import { selectBook } from '../actions/index';

// action generated by actionCreator shall end up flowing through all reducers
import { bindActionCreators } from 'redux';

// Component got linked to redux via connect(), see bottom
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} // call action creator
          className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    );
  }
}

// promote component (react) to container (redux) [2]
// IMPORTANT glue between react and redux.
// Whenever app state changes, the container will automatically rerender
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of Booklist.
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList
// container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote component (react) to container (redux) [3]
// connect() takes a function and a component and produces a container.
// Container needs to know about this new dispatch method.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// Whenever app state changes, the returned object from mapStateToProps
// will be assigned as props in the component
