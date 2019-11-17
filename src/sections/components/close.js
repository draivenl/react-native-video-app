import React from "react";
import { TouchableHighlight, Text, StyleSheet } from "react-native";


const Close = props => {
    return(
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
        >
            <Text style={styles.button}>X</Text>

        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        
    }
});

export default Close