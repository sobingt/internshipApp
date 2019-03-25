import React, { Component } from 'react'
import ActivityIndicatorComponent from './ActivityIndicatorComponent';

export default class RenderLoader extends Component{
    render(){
      if(this.props.isLoading){
        return(
          <ActivityIndicatorComponent/>
        );
      }
      else{
        return null;
      }
    }
  }