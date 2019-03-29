import React, {Component} from 'react';
import{
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
}from 'react-native';
import {
    List,
    Button
}from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {getMovie} from '../actions/movieActions';
import {connect} from 'react-redux';

import Logo from '../components/Logo';
import RenderList from '../components/RenderList';

const renderSeparator = () => {
    return(
        <View
        style={{
            height: 1,
            backgroundColor: '#607D8B',
            marginVertical: 5,
        }}/>
    )
}

const renderHeader = () => {
    return(
        <TouchableOpacity 
        style={
            {borderBottomWidth: 1,
             borderBottomColor:'#607D8B',
             paddingVertical: 20,
             marginBottom: 10
               }}>
            <Logo/>
        </TouchableOpacity>
    )
}

class MovieList extends Component {
    navigateToDetails = (movie) => {
        this.props.getMovieDetail(movie)
        this.props.navigation.navigate('MovieDetails');
    }
    render(){
        const { navigation } = this.props;
        const movies = navigation.getParam('movies', {});
        return(
            <View>
                <FlatList
                    data={movies}
                    renderItem={({ item }) => {
                        return(
                            <RenderList item={item} navigateToDetails={this.navigateToDetails}/>
                        )
                    }}
                    keyExtractor={(item) => item._id}
                    ListHeaderComponent={renderHeader}
                    ItemSeparatorComponent={renderSeparator}
                    style={{marginBottom: 30}}/>
                <View style={styles.BottonContainer}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddMovieList', {navigateToDetails: this.navigateToDetails})}>
                        <Icon name="plus" color='#fff' size={30}/>
                    </TouchableOpacity>
                    <Text style={styles.ButtonText}>Add Movie List</Text>
                </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BottonContainer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '100%',
        backgroundColor: '#607D8B',
    },
    ButtonText:{
        fontSize: 22,
        color: '#fff',
        marginHorizontal: 20
    }

})

const mapStateToProps = state => ({
    state 
})

const mapActionToProps = {
    getMovieDetail: getMovie
}


export default connect(mapStateToProps, mapActionToProps)(MovieList);