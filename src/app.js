import React, { Component } from "react";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import API from "../utils/api";
import Home from "./screens/containers/Home";
import Loading from "./sections/components/loading";
import Header from "./sections/components/Header";
import Player from "./player/containers/player";
import SuggestionList from './videos/containers/SuggestionList';
import CategoryList from './videos/containers/CategoryList';
import {store, persistor} from '../store'


class AppLayout extends Component {

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

export default AppLayout