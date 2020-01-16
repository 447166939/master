import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {getPixel} from './util';

class FunnelChart extends Component {
    render(){
        return (
            <View style={styles.container}></View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        width:getPixel(355),
        height:getPixel(340),
        marginVertical:getPixel(5),
        backgroundColor:'#daeadf'
    }
})
export default FunnelChart;