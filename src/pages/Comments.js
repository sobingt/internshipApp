import React, { Component } from 'react'
import{
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList
}from 'react-native'
import {connect} from 'react-redux';
import axios from 'axios';
import {Icon} from 'react-native-elements';
import CommentItem from '../components/CommentItem';

 class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            comments: []
        }
    }    
        addComment = () => {
            console.log('pressed')
            const {navigation} = this.props;
            const id = navigation.getParam('id', [])
            const username = this.props.user.username;
            const comment = {text: this.state.text, postedBy: username}
            const url = `https://user-api-intern.herokuapp.com/movies/${id}/comments`
            axios.post(url, comment)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err));
        }
        componentDidMount = () => {
            const {navigation} = this.props;
            const id = navigation.getParam('id', '');
            const url = `https://user-api-intern.herokuapp.com/movies/${id}/comments`
            axios.get(url)
            .then(response => {
                this.setState({comments: response.data})
            })
            .catch(err => console.log(err));
        }        
  render() {
      const comments = this.state.comments;
    return (
     <View style={styles.container}>
         <View style={StyleSheet.header}>

         </View>
         <FlatList style={styles.content}
            data={comments}
            renderItem={({item}) => {
                return(
                    <CommentItem comment={item}/>
                )    
            }}
            keyExtractor = { (item) => key = item._id}
         />

         <View style={styles.footer}>
             <TouchableOpacity style={{marginRight: 10}}>
                <Icon name='camera' type='ionicons' color='#000'/>
             </TouchableOpacity>
             <TextInput style={styles.commentBox}
              onChangeText={(text) => this.setState({text})}/>
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
    user: state.user.user
  })
export default connect(mapStatesToProps)(Comments);
