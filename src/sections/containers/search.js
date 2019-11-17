import React, { Component } from "react";
import { TextInput, StyleSheet, ActivityIndicator, View } from "react-native";
import { connect } from "react-redux";

import API from '../../../utils/api'

class Search extends Component {
    state ={
        searchText: ""
    }
    handleSubmit = async () => {
        const movies = await API.searchMovie(this.state.searchText)
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        })
    }
    handleChangeText = text => {
        this.setState({
            searchText: text
        })
    }
    render() {
        return(
            <View>
                <TextInput
                    placeholder="Buscar Pelicula"
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onSubmitEditing={this.handleSubmit}
                    onChangeText={this.handleChangeText}
                    style={styles.input}
                />
                {this.props.loading && <ActivityIndicator color="red" />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
  })


export default connect(null)(Search)