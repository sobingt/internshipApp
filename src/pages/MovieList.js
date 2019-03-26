import React, {Component} from 'react';
import{
    FlatList,
    View,
    Text,
    TouchableOpacity
}from 'react-native';

import {
    ListItem,
    List
}from 'react-native-elements';

import Logo from '../components/Logo';

const renderSeparator = () => {
    return(
        <View
        style={{
            height: 1,
            width: '80%',
            backgroundColor: '#607D8B',
            marginLeft: '10%',
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
              width: '80%', marginLeft: '10%',
               marginRight: '10%',
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
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <ListItem
                            title={item.Title}
                            subtitle={item.Year}
                            leftAvatar={{ source: { uri: item.Poster } }}
                            />
                        </TouchableOpacity>    
                    )}
                    keyExtractor={(item) => item._id}
                    ListHeaderComponent={renderHeader}
                    ItemSeparatorComponent={renderSeparator}/>
            </View>
        )
    }
}

export default MovieList;