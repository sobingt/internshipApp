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
import Error from './Error';

class RenderList extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            error: ''
        }
    }
    getMovieDetail = (id) => {
        this.setState({error: ''});
        this.setState({isLoading: true})
        const url = `https://user-api-intern.herokuapp.com/movies/${id}`;
        axios.get(url)
        .then(response => {
            this.setState({error: ''});
            this.setState({isLoading: false})
            this.props.navigateToDetails(response.data);
        })
        .catch(err=> {
            this.setState({error: 'Error occured please try again!'});
            this.setState({isLoading: false})
            setTimeout(() => this.setState({error: ''}), 1500);
        })
    }
    render(){
        const error = this.state.error;
        const item = this.props.item;
        const loading = this.state.isLoading ? (
        <ActivityIndicator size="large"
         animating color="#CEDOCE"/>) : null;
        return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.getMovieDetail(item._id)}>
                <Image source={{uri: item.Poster}}
                 style={styles.imageStyle}
                 />
            </TouchableOpacity>
            <View style={styles.descriptionContainer}>
                <Text style={styles.titleText}>
                    {item.Title}
                </Text>
                <Text style={styles.releaseText}>
                    release year: {'     ' + item.Year}
                </Text>
                {loading}
                <Error error={error}/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 2,
    },
    imageContainer: {

    },
    imageStyle: {
        width: 150, 
        height: 100,
        borderRadius: 3,
        marginRight: 20,
    },
    descriptionContainer: {
        flexWrap: 'wrap',
        marginRight: 20,
    },
    titleText:{
        
    },
    releaseText:{
        
    }
})

export default RenderList;