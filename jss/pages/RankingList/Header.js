import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {getPixel} from '../../common/util'
import TitleComponent from './TitleComponent'

export default class Header extends Component {
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.goback}><View style={styles.backBtn}><Image style={styles.icon} source={require('../../static/back.png')}></Image></View></TouchableOpacity>
                <View style={styles.title}><TitleComponent /></View>
                <TouchableOpacity onPress={this.props.openDrawer}><View style={styles.rightBtn}><Text style={styles.rightTxt}>筛选</Text></View></TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        width:getPixel(375),
        height:getPixel(44),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:getPixel(10)       
    },
    backBtn: {
        width:getPixel(10),
        height: getPixel(20)
    },
    rightBtn:{
        width:getPixel(40),
        height:getPixel(16),
        marginRight:getPixel(10),
    },
    title: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    icon: {
        width:getPixel(10),
        height:getPixel(20)
    },
    rightTxt: {
        color:'#5788ff',
        fontSize:16,
        fontWeight:'100'
    }
})