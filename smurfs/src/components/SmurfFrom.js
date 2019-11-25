import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfData, isLoading } from "../actions";
import "./App.css";
import SmurfForm from "./SmurfForm";
import SmurfsList from "./SmurfsList";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfData();
  }

  render() {
    if (this.props.isLoading) {
      return <p>Smurfs are out of the village.</p>;
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfsList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getSmurfData }
)(App);
