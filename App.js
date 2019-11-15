import React, {Component} from 'react';
import {
  Text
} from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import {store, persistor} from './store'


import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import API from "./utils/api";

import Player from './src/player/containers/player';
import Loading from './src/sections/components/loading';

class App extends Component {

  async componentDidMount(){
    const categoryList = await API.getMovies()
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestions(2)
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    
  }
  render(){
    return(
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
          <Home>
            <Header/>
            <Player></Player>
            
            <Text>Buscador</Text>
            <CategoryList/>
            <SuggestionList/>
          </Home>

        </PersistGate>
      </Provider>
    )

  }

}



export default App;
