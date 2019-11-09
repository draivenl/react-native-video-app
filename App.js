import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import Home from './src/screens/containers/Home'
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import API from "./utils/api";

import Video from 'react-native-video'

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
        <View
          style={{
            flex: 1,
            height: 100
          }}
        >
          <Video
            // source={{
            //   uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
            // }}
            source={
              require('./assets/bolos.mp4')
            }
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
            resizeMode="contain"
          />
        </View>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList list={this.state.categoryList}/>
        <SuggestionList list={this.state.suggestionList}/>
      </Home>
    )

  }

}



export default App;
