import React, { Component } from "react";
import { connect } from "react-redux";

import MovieLayout from "../components/movie-layout";
import Player from "../../player/containers/player";
import Header from "../../sections/components/Header";
import Close from "../../sections/components/close";
import Details from "../../videos/components/details";



class Movie extends Component {
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null,
            }
        })
    }

    render() {
        return(
            <MovieLayout>
                <Header>
                    <Close
                        onPress={this.closeVideo}
                    ></Close>
                </Header>
                <Player/>
                <Details {...this.props.movie}/>
            </MovieLayout>
        )
    }   

}

const mapStateToProps = (state) => {
    return {
        movie: state.selectedMovie
    }
}

export default connect(mapStateToProps)( Movie )