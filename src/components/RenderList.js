import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator
}from 'react-native';
import axios from 'axios';
import {getMovie} from '../actions/movieActions';
import {connect} from 'react-redux';
class RenderList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        }
    }
    getMovieDetail = () => {
        this.setState({isLoading: true})
        const url = `https://user-api-intern.herokuapp.com/movies/${this.props.item._id}`;
        axios.get(url)
        .then(response => {
            this.setState({isLoading: false})
            console.log(response.data)
            this.props.getMovie(response.data);
        })
        .catch(err=> {
            console.log(err)
            this.setState({isLoading: false})
        })
    }
    render(){
        console.log(this.props)
        const item = this.props.item;
        const loading = this.state.isLoading ? (
        <ActivityIndicator size="large"
         animating color="#CEDOCE"/>) : null;
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={this.getMovieDetail}>
                <Image source={{uri: item.Poster}}
                 style={styles.imageStyle}
                 />
            </TouchableOpacity>
            <View>
                <Text style={styles.titleText}>
                    {item.Title}
                </Text>
                {loading}
                <Text style={styles.releaseText}>
                    release year: {'     ' + item.Year}
                </Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 2,
        flexWrap: 'wrap'
    },
    imageContainer: {

    },
    imageStyle: {
        width: 150, 
        height: 100,
        borderRadius: 3,
        marginRight: 10,
    },
    titleText:{
        marginLeft: 10,
    },
    releaseText:{
        marginLeft: 10,
    }
})

const mapStateToProps = state => ({
    state 
})

export default connect(mapStateToProps, {getMovie})(RenderList);