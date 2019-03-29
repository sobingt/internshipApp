import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
}from 'react-native';

import Logo from '../components/Logo';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';

export class MovieDetails extends Component {
  render() {
      const {movie} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Logo/>
            </TouchableOpacity>
        </View>
        <View style={styles.content}>
            <Image source={{uri: movie.Poster}} style={styles.contentImage}/>
            <Text style={styles.contentTitle}>{movie.Title}</Text>
            <Text style={styles.contentRelease}>Released in {' '+movie.Year}</Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.reactionCount}>
                <Text style={styles.reactionText}>
                    likes
                </Text>
                <Text style={styles.reactionText}>
                    comments
                </Text>
            </View>
            <View style={styles.addReaction}>
                <TouchableOpacity style={{marginRight: 10}}>
                    <Icon name='thumbsup' type='octicon' color='#fff'/>
                </TouchableOpacity>
                <Text style={styles.addReactionText}>
                    like
                </Text>
                <TouchableOpacity style={{marginRight: 10}}
                 onPress={() => this.props.navigation.navigate('Comments')}>
                    <Icon name='comment' type='octicon' color='#fff'/>
                </TouchableOpacity>
                <Text style={styles.addReactionText}>
                    comment
                </Text>
            </View>
        </View>    
      </View>

    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#607D8B'
    },
    footer: {

    },
    content: {

    },
    contentImage: {
        width: '100%',
        height: 500
    },
    contentTitle:{
        fontSize: 21,
        margin: 20,
        color: '#fff'
    },
    contentRelease: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 20,
    },
    footer: {
        marginTop: 20,
        borderTopWidth: .5,
        borderTopColor: '#fff'
    },
    reactionCount: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomWidth: 1.5,
        borderBottomColor: '#fff',
    },
    reactionText: {
        fontSize: 16,
        color: '#fff',
        marginRight: 20
    },
    addReaction: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        alignItems: 'center',
    },
    addReactionText: {
        fontSize: 16,
        color:'#fff',
        marginRight: 100,
    }
})

const mapPropsToState = state => ({
    movie: state.movie.movie
  })

export default connect(mapPropsToState)(MovieDetails);
