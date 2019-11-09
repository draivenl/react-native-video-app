import React, {Component} from "react";
import { View, Text, FlatList, Layout } from "react-native";
import Empty from "../components/empty";
import VerticalSeparator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";

class CategoryList extends Component {
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
        return (
        
            <FlatList 
                horizontal
                keyExtractor={this.keyExtractor}
                ListEmptyComponent={()=>this.renderEmpty()}
                data={this.props.list} 
                renderItem={({item})=>this.renderItem(item)}
                ItemSeparatorComponent={()=>this.itemSeparator()}
            />
        )
    }
}

export default CategoryList