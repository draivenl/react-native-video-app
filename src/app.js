import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";


import API from "../utils/api";
import Home from "./screens/containers/Home";
import Header from "./sections/components/Header";
import SuggestionList from './videos/containers/SuggestionList';
import CategoryList from './videos/containers/CategoryList';
import {store, persistor} from '../store'
import Movie from "./screens/containers/movie";


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
        if (this.props.selectedMovie) {
            return <Movie/>
        }
        return(
            <Home>
                <Header/>
                <Movie/>
                <Text>Buscador</Text>
                <CategoryList/>
                <SuggestionList/>
            </Home>
        )
    }

}

const mapStateToProps = state => {
    return {
        selectedMovie: state.selectedMovie,
    }
}

export default connect( mapStateToProps )( AppLayout )