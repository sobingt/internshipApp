import React, {Component} from 'react';
import{
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity
}from 'react-native';
import {
    List
}from 'react-native-elements';

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
               marginBottom: 5}}>
            <Logo/>
        </TouchableOpacity>
    )
}

class MovieList extends Component {
    render(){
        const { navigation } = this.props;
        const movies = navigation.getParam('movies', {});
        return(
            <View>
                <FlatList
                    data={movies}
                    renderItem={({ item }) => {
                        return(
                            <RenderList item={item}/>
                        )
                    }}
                    keyExtractor={(item) => item._id}
                    ListHeaderComponent={renderHeader}
                    ItemSeparatorComponent={renderSeparator}/>
            </View>
        )
    }
}

export default MovieList;