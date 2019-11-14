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
import ProgressBar from "../components/progress-bar";



class Player extends Component {
    state = {
        loading: true,
        paused: false,
        currentTime: 0,
        lastTime: -1,
        timeLeft: 0,
        duration: 0,
        fullscreen: false,
        seek: 0,
    }
    onLoad = (data) => {
        this.setState({
            loading: false,
            duration: data.duration,
            timeLeft: data.duration
        })
    }
    onProgress = (data) =>{
        const last = this.state.currentTime
        this.setState({
            lastTime: last,
            currentTime: data.currentTime,
            timeLeft: Math.floor(this.state.duration - data.currentTime)
        })
        if ((data.currentTime - last) < -(this.state.duration/2) ) {
            this.handleEnd()
        }
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
    handleSlidingComplete = (data) => {
        this.setState({
            seek: data
        })
    }
    handleEnd = () => {
        this.setState({
            paused: true,
            seek: 0.1,
            currentTime: 0.1
        })
        
    }
    handleError = (error) => {
        console.log("Error:::" + error);
        
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
                        // source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' }}
                        style={styles.video}
                        resizeMode="contain"
                        onLoad={this.onLoad}
                        onBuffer={this.onLoad}
                        paused={this.state.paused}
                        onProgress={this.onProgress}
                        fullscreen={this.state.fullscreen}
                        seek={this.state.seek}
                        onEnd={this.handleEnd}
                        muted={false}
                        onError={this.handleError}
                        progressUpdateInterval={100}
                        repeat={true}
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
                        <ProgressBar 
                            duration={this.state.duration}
                            currentTime={this.state.currentTime}
                            //onValueChange={this.onValueChange}
                            onSlidingComplete={this.handleSlidingComplete}
                        
                        ></ProgressBar>
                        
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