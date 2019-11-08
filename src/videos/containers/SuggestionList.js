import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import Layout from "../components/SuggestionListLayout";
import Empty from "../components/empty";
import VerticalSeparator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";

class SuggestionList extends Component {
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
        const list = [
            {   
                key: '1',
                title: 'Avangers',
                
            },
            {   
                key: '2',
                title: 'Super Man',
                
            },
            {   
                key: '3',
                title: 'Batman',
                
            }

        ]
        return (<Layout title="Recomendados...">
                    <FlatList 
                        ListEmptyComponent={()=>this.renderEmpty()}
                        data={list} 
                        renderItem={({item})=>this.renderItem(item)}
                        ItemSeparatorComponent={()=>this.itemSeparator()}
                    />
                </Layout>)
    }
}

export default SuggestionList