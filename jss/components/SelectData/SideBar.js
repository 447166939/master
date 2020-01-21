import React,{Component} from 'react';
import {Image,StyleSheet,View,Text,Dimensions,TouchableOpacity} from 'react-native';
import {getPixel} from '../../common/util';

const {height}=Dimensions.get('window');
export default class SideBar extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>数据筛选</Text>
                    <Image style={styles.icon} source={require('../../static/close.png')}></Image>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        height,
        width:'100%',
        backgroundColor:'green',
        zIndex:1000,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title: {
        fontSize: 16,
        fontWeight:'bold',
    },
    icon: {
        width: getPixel(50),
        height: getPixel(50),
    }
})