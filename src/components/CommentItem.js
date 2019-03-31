import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
}from 'react-native'
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {likeComment, getComment} from '../actions/commentActions';
 class CommentItem extends Component {
     constructor(props){
         super(props);
         this.state = {
             likes : this.props.comment.likes.length,
             clicked: false,
         }
     }
    likeComment = (id) => {
        const listId = this.props.listId;
        const liked = this.props.user.username;
        const commentId = id;
        this.props.likeComment({listId, commentId, liked: {liked}})
        if(!this.state.clicked){
            this.setState({likes: this.state.likes + 1});
            this.setState({clicked: true})
        }
        setTimeout(() => this.setState({clicked: false}), 1500);
    }
  render() {
      const {comment} = this.props;
      const likes = this.state.likes;
      const renderLike = likes?(
      <View style={styles.like}>
        <Icon name='thumbsup' type='octicon' color='#000' size={13}/>
        <Text style={{fontSize: 15, marginLeft: 5 }}>{likes}</Text>
      </View>):null;
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
        {renderLike}
        <TouchableOpacity onPress={() => this.likeComment(comment._id)}>
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
    like: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 5,

    }
})


const mapStatesToProps = state => ({
    user: state.user.user,
    comments: state.comment.comments,
    commentStored: state.comment.comment
  })
const mapActionsToProps =  {likeComment,getComment};
export default connect(mapStatesToProps,mapActionsToProps)(CommentItem);

