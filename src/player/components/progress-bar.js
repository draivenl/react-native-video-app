import React from "react";
import { StyleSheet } from "react-native";
import Slider from '@react-native-community/slider'

const ProgressBar = (props) => {
    return <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={props.duration}
        value={props.currentTime}
        //step={(props.duration / 10000)}
        //onValueChange={props.onValueChange}
        minimumTrackTintColor="#2b8cf7"
        maximumTrackTintColor="#747474"
        thumbTintColor="white"
        onSlidingComplete={props.onSlidingComplete}
        

    ></Slider>
}

const styles = StyleSheet.create({
    slider: {
        width: '50%',
        
    }
});

export default ProgressBar