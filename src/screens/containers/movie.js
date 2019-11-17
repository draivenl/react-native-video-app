import React, { Component } from "react";
import { connect } from "react-redux";

import MovieLayout from "../components/movie-layout";
import Player from "../../player/containers/player";
import Header from "../../sections/components/Header";
import Close from "../../sections/components/close";
import Details from "../../videos/components/details";

import { Animated } from "react-native";


class Movie extends Component {
    state = {
        opacity: new Animated.Value(0)
    }

    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000
            }
        ).start()
    }

    render() {
        return(
            <Animated.View
                style={{
                    flex: 1,
                    opacity: this.state.opacity,
                }}
            >
                <MovieLayout>
                    <Header>
                        <Close
                            onPress={this.closeVideo}
                        ></Close>
                    </Header>
                    <Player/>
                    <Details {...this.props.movie}/>
                </MovieLayout>

            </Animated.View>
        )
    }   

}


const mapStateToProps = (state) => {
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)( Movie )