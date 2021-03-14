import React, { Component } from "react";

import Header from "./components/Header";
import Customize from "./components/Customize";
import Cart from "./components/Cart";

import "./App.css";
import { FEATURES, initialState } from "./store/store";

class App extends Component {
  state = {...initialState}
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Customize
            features={FEATURES}
            updateFeature={this.updateFeature}
            selected={this.state.selected}
          />
          <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
