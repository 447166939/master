import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export default class Todo extends Component {
  handlePress=()=>{
    const {navigation}=this.props;
    navigation.navigate('Achievement');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>todo</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={{borderRadius:20,width:100,height:60,backgroundColor:'#cccccc'}}><Text>goto achievement</Text></View>
        </TouchableOpacity>
      </View>
    )
  }
}
