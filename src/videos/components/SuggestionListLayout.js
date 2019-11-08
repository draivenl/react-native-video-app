import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SuggestionListLayout = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.title}
            </Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingVertical: 10,
            flex: 1
        },
        title: {
            color: '#4c4c4c'
        }
    }
)


export default SuggestionListLayout
