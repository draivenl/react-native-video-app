import React from 'react'
import {
    Text, 
    View, 
    Image, 
    StyleSheet,
    SafeAreaView
} from 'react-native'

function Header (props) {
        return (
            <View>
                <SafeAreaView>
                    <View style={styles.container}>
                        <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                        <View style={styles.right}>
                            {props.children}
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 25,
        resizeMode: 'contain'
    },
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
})

export default Header