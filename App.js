import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import API from "./utils/api";

import Player from './src/player/containers/player';

class App extends Component {
  state = {
    suggestionList:[],
    categoryList: []
  }


  async componentDidMount(){
    const movies = await API.getSuggestions(2)
    const categories = await API.getMovies()
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
    
  }
  render(){
    return(
      <Home>
        <Header/>
        <Player></Player>
        
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList list={this.state.categoryList}/>
        <SuggestionList list={this.state.suggestionList}/>
      </Home>
    )

  }

}



export default App;
