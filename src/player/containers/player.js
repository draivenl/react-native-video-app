import React, { Component } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import Video from 'react-native-video'
import Layout from "../components/layout";



class Player extends Component {
    state = {
        loading: true
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    render(){
        return(
            <Layout
                loading={this.state.loading}
                video={
                    <Video
                        source={
                            require('../../../assets/bolos.mp4')
                        }
                        style={styles.video}
                        resizeMode="contain"
                        onLoad={this.onLoad}
                    />
                }
                loader={
                    <ActivityIndicator color="red"/>
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