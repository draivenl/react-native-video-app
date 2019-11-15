import React, {Component} from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store, persistor} from './store'
import Loading from "./src/sections/components/loading";


import AppLayout from "./src/app";

class App extends Component {
  render(){
    return(
      <Provider
          store={store}
      >
          <PersistGate
          loading={<Loading/>}
          persistor={persistor}
          >
            <AppLayout/>
          </PersistGate>
        </Provider>  
    )
  }
}

export default App;
