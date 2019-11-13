import React, { Component } from "react";
import { 
    StyleSheet, 
    ActivityIndicator, 
    Text, 
    TouchableHighlight 
} from "react-native";
import Video from 'react-native-video'
import Layout from "../components/layout";
import ControlLayout from "../components/control-layout";
import PlayPause from "../components/play-pause";



class Player extends Component {
    state = {
        loading: true,
        paused: false,
        currentTime: 0,
        timeLeft: 0,
        duration: 0,
        fullscreen: false
    }
    onLoad = (data) => {
        this.setState({
            loading: false,
            duration: data.duration,
            timeLeft: data.duration
        })
    }
    onProgress = (data) =>{
        this.setState({
            currentTime: Math.floor(data.currentTime),
            timeLeft: Math.floor(this.state.duration - data.currentTime)
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    onPressFull = () => {
        this.setState({
            fullscreen: !this.state.fullscreen
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
                        paused={this.state.paused}
                        onProgress={this.onProgress}
                        fullscreen={this.state.fullscreen}
                    />
                }
                loader={
                    <ActivityIndicator color="red"/>
                }
                controls={
                    <ControlLayout>
                        <PlayPause 
                            onPress={this.playPause}
                            paused={this.state.paused}
                        />
                        <Text>Progress bar {this.state.currentTime} |</Text>
                        <Text>Time left  {this.state.timeLeft}|</Text>
                        <TouchableHighlight onPress={()=>this.onPressFull()} ><Text>Full Screen</Text></TouchableHighlight>
                    </ControlLayout>
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