import React, { Component } from 'react'
import{
    Text,
    View,
    StyleSheet
}from 'react-native'
 class Comments extends Component {
  render() {
    return (
     <View>
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
         <View styles={styles.footer}>
             
         </View>
     </View> 
    )
  }
}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderBottomColor: '#999',
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

    }
})

export default Comments
