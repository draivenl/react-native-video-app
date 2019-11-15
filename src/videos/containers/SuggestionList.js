import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import Layout from "../components/SuggestionListLayout";
import Empty from "../components/empty";
import VerticalSeparator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        list: state.suggestionList
    }
}

class SuggestionList extends Component {
    keyExtractor = item => item.id.toString()
    
    renderEmpty = () => {
        return <Empty text='No hay componentes en la lista'/>
    }
    viewMovie = item => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item
            }

        })
    }
    renderItem = (item) => {
        return (
            <Suggestion 
                {...item}
                onPress={() => this.viewMovie(item)}    
            />
        )
    }
    itemSeparator = () => {
        return <VerticalSeparator text='No hay componentes en la lista'/>
    }
    render(){
        return (<Layout title="Recomendados...">
                    <FlatList 
                        keyExtractor={this.keyExtractor}
                        ListEmptyComponent={()=>this.renderEmpty()}
                        data={this.props.list} 
                        renderItem={({item})=>this.renderItem(item)}
                        ItemSeparatorComponent={()=>this.itemSeparator()}
                    />
                </Layout>)
    }
}

export default connect(mapStateToProps)(SuggestionList)