import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import Layout from "../components/SuggestionListLayout";
import Empty from "../components/empty";
import VerticalSeparator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";

class SuggestionList extends Component {
    keyExtractor = item => item.id.toString()
    
    renderEmpty = () => {
        return <Empty text='No hay componentes en la lista'/>
    }
    renderItem = (item) => {
        return (
            <Suggestion {...item}/>
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

export default SuggestionList