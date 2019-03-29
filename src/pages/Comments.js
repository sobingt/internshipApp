import React, { Component } from 'react'
import{
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput
}from 'react-native'

import {Icon} from 'react-native-elements';

 class Comments extends Component {
  render() {
    return (
     <View style={styles.container}>
         <View style={StyleSheet.header}>

         </View>
         <View style={styles.content}>
            <View style={styles.contentItem}>
                <View style={styles.contentItemText}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                        Ermyas
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '300', color: '#000'}}>
                        this is awesome content bro
                    </Text>
                </View>
                <Text style={
                    {textAlign:'right', marginRight: 20, fontSize: 16, color: '#000'}}>
                    Like</Text>
            </View>
            <View style={styles.contentItem}>
                <View style={styles.contentItemText}>
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#000'}}>
                        Ermyas
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '300', color: '#000'}}>
                        this is awesome content bro
                    </Text>
                </View>
                <Text style={
                    {textAlign:'right', marginRight: 20, fontSize: 16, color: '#000'}}>
                    Like</Text>
            </View> 
         </View>
         <View style={styles.footer}>
             <TouchableOpacity style={{marginRight: 10}}>
                <Icon name='camera' type='ionicons' color='#000'/>
             </TouchableOpacity>
             <TextInput style={styles.commentBox}/>
             <TouchableOpacity>
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

export default Comments
