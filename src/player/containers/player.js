import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Video from 'react-native-video'
import Layout from "../components/layout";



class Player extends Component {
    render(){
        return(
            <Layout
                video={
                    <Video
                        source={
                            require('../../../assets/bolos.mp4')
                        }
                        style={styles.video}
                        resizeMode="contain"
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
});

export default Player