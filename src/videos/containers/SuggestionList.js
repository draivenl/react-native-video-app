import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";
import Layout from "../components/SuggestionListLayout";

class SuggestionList extends Component {
    render(){
        const list = [
            {   
                key: '1',
                name: 'Lisandro',
                lastName: 'Gomez'
            },
            {   
                key: '2',
                name: 'Juan',
                lastName: 'Gomez'
            },
            {   
                key: '3',
                name: 'Diana',
                lastName: 'Londoño'
            }

        ]
        return (<Layout title="Recomendados...">
                    <FlatList 
                        data={list} 
                        renderItem={ ({item}) => <Text>{item.name} {item.lastName}</Text> }
                    />
                </Layout>)
    }
}

export default SuggestionList