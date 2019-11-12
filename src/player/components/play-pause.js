import React from "react";
import { 
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback

} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const myIconPlay = <Icon name="play" size={20}/>;
const myIconPause = <Icon name="pause" size={20}/>;


const PlayPause = (props) => {
    return <TouchableHighlight 
                onPress={props.onPress} 
                style={styles.container}
                underlayColor='gray'
                hitSlop={{
                    left: 5,
                    top: 5,
                    bottom: 5,
                    right: 5
                }}
            >   
                {props.paused ? myIconPlay:myIconPause}
            </TouchableHighlight>
}

const styles = StyleSheet.create({
    button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
})

export default PlayPause