import React,{Component} from 'react';
import {StyleSheet,View,Text,Dimensions} from 'react-native';

const {height}=Dimensions.get('window')
class SelectData extends Component {
    render(){
        return (
            <View style={styles.container}><Text>hello world</Text></View>
        )
    }
}
export default SelectData;
const styles=StyleSheet.create({
    container: {
        marginRight:0,
        height,
        flex:1,
        flexDirection:'column-reverse',
        backgroundColor:'#fff'
        
    }
})