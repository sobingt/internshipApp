import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
}from 'react-native'

 class CommentItem extends Component {
  render() {
      const {comment} = this.props;
    return (
        <View style={styles.contentItem}>
        <View style={styles.contentItemText}>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                {comment.postedBy}
            </Text>
            <Text style={{fontSize: 18, fontWeight: '300', color: '#000'}}>
                {comment.text}
            </Text>
        </View>
        <TouchableOpacity onPress={this.props.like(comment._id)}>
        <Text style={
            {textAlign:'right', marginRight: 20, fontSize: 16, color: '#000'}}>
            Like</Text>
        </TouchableOpacity>
    </View> 
    )
  }
}

const styles = StyleSheet.create({
    contentItem: {
        padding: 10,
        marginBottom: 10
    },
    contentItemText: {
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
        marginBottom: 3
    },
})

export default CommentItem
