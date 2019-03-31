import React, { Component } from 'react'
import{
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    Keyboard,
    Image,
    ScrollView
}from 'react-native'
import {Icon} from 'react-native-elements';
import  { Facebook } from 'react-content-loader'

import CommentItem from '../components/CommentItem';

import {connect} from 'react-redux';
import {
        AddComment,
        getComments, 
        clearComments, 
        likeComment} from '../actions/commentActions';
import ImagePicker from 'react-native-image-picker';     

class RenderImage extends Component{
    render(){
        if(this.props.image){
            return(
                <ScrollView>
                    <Image source={{uri: this.props.image.uri}}
                    style={{width: 100, height: 100, alignItems: 'center'}}/> 
                </ScrollView>
            )
        }
        else{
            return null;
        }
        
    }
}

 class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            isLoading: true,
            image: null
        }
    }    
        addComment = () => {
            if(this.state.text){
                this.setState({text: ''})
                Keyboard.dismiss();
                const {navigation} = this.props;
                const id = navigation.getParam('id', [])
                const username = this.props.user.username;
                const comment = {text: this.state.text, postedBy: username}
                this.props.AddComment({comment, id});
            }
        }
        choosePhoto = () => {
            const options = {
              noData: true,
            }
            ImagePicker.launchImageLibrary(options, (response) => {
                  this.setState({
                    image: response
                  });
            })
          }

        componentDidMount = () => {
            const {navigation} = this.props;
            const id = navigation.getParam('id', '');
            this.props.getComments(id);
        }

        componentWillUnmount = () => {
            this.props.clearComments();
        }
  render() {
      const {comments, navigation} = this.props;
      const listId = navigation.getParam('id', '');
    return (
     <View style={styles.container}>
         <View style={StyleSheet.header}>
         </View>
         <FlatList style={styles.content}
            data={comments}
            renderItem={({item}) => {
                return(
                    <CommentItem comment={item}
                     listId={listId}/>
                )    
            }}
            keyExtractor = { (item) => key = item._id}
         />
          <RenderImage image={this.state.image}/> 
         <View style={styles.footer}>
             <TouchableOpacity style={{marginRight: 10}} onPress={this.choosePhoto}>
                <Icon name='camera' type='ionicons' color='#000'/>
             </TouchableOpacity>
             <TextInput style={styles.commentBox}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
             <TouchableOpacity onPress={this.addComment}>
             <Icon name='send' type='ionicons' color='#000'/>    
             </TouchableOpacity>
         </View>
     </View> 
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        marginBottom: 10,
    },
    content: {
        padding: 20,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        zIndex: 10,
        backgroundColor: '#fff',
    },
    commentBox: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        paddingHorizontal: 30,
        flex: 1,
        borderRadius: 25,
        marginRight: -30
    }
})

const mapStatesToProps = state => ({
    user: state.user.user,
    comments: state.comment.comments
  })
const mapActionsToProps =   {
    AddComment,
    getComments,
    clearComments};
export default connect(mapStatesToProps,mapActionsToProps)(Comments);
