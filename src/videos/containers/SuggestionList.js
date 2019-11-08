import React, {Component} from "react";
import { View, Text, FlatList } from "react-native";


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
        return <View>
                <Text>SuggestionList</Text>
                <FlatList data={list} renderItem={({item}) => {
                    return <Text>{item.name} {item.lastName}</Text>
                }}/>
                </View>
    }
}

export default SuggestionList