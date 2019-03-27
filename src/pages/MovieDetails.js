import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
}from 'react-native';

import {Card, Button, Icon} from 'react-native-elements';
import {connect} from 'react-redux';

export class MovieDetails extends Component {
  render() {
      const {movie} = this.props;
    return (
      <View style={styles.container}>
        <View>
            <Card containerStyle={{borderWidth: 0}}
                title={movie.Title}
                image={{uri: movie.Poster}} imageStyle={{height: 350}}>
                <Text style={{marginBottom: 10}}>
                    {movie.Title} is released in {movie.Year}
                </Text>
                <View style={styles.reactionContainer}>
                    <View style={styles.likeContainer}>
                        <Icon name="like2" type="antdesign"/>
                        <Text> Like</Text>
                    </View>

                    <View style={styles.commentContainer}>
                        <Icon name="comment"/>
                        <Text>Comment</Text>
                    </View>
                </View>
                <Button
                    backgroundColor='#607D8B'
                    buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='MovieListing' onPress={ () => this.props.navigation.navigate('MovieList')}/>
            </Card>
        </View>
            <Text style={{fontSize: 20, color: '#607D8B', textAlign: 'center', marginTop: 20}}>
                Comments
            </Text>    
      </View>

    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    reactionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})

const mapPropsToState = state => ({
    movie: state.movie.movie
  })

export default connect(mapPropsToState)(MovieDetails);
