import React from "react";
import { 
    Text, 
    View, 
    StyleSheet,
    ImageBackground 
} from "react-native";

const CategoryListLayout = (props) => {
    return(
        <ImageBackground
            source={
                require('../../../assets/backgronund.png')
            }
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                {props.children}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            paddingVertical: 30,
            paddingHorizontal: 10
        },
        title: {
            color: '#4c4c4c',
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 'bold',
        }
    }
)


export default CategoryListLayout
