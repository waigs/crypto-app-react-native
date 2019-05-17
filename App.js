import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import Store from "./src/Store";

import { Header, CryptoContainer } from "./src/components";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header headerText="Crypto Feeds" />
        </View>
      </Provider>
    );
  }
}

export default App;
