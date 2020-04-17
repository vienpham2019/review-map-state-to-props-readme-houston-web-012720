import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  handleOnClickCandy() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_CANDY',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <button onClick={() => this.handleOnClickCandy()}>
            Click to add more candy
          </button>
          <p>{this.props.items[this.props.items.length - 1]}</p>
          <p>{this.props.users[this.props.users.length - 1]}</p>
          <p>{this.props.candy.join(", ")}</p>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log(state)
//   // debugger;
//   return { items: state.items, users: state.users }
// }

export default connect(state => {return {items : state.items , users: state.users , candy: state.candy}})(App);
