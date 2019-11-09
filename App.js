import React, {Component} from 'react';
import {
  Text
} from 'react-native';

import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from "./utils/api";

class App extends Component {
  state = {
    suggestionList:[]
  }


  async componentDidMount(){
    const movies = await API.getSuggestions(2)
    console.log(movies);
    this.setState({
      suggestionList: movies
    })
    
  }
  render(){
    return(
      <Home>
        <Header/>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList list={this.state.suggestionList}/>
      </Home>
    )

  }

}



export default App;
