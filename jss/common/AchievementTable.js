import React,{Component} from 'react';
import {StyleSheet,View,FlatList,Image,Text} from 'react-native';
import {getPixel} from './util';

class AchievementTable extends Component {
    render(){
        const {title}=this.props;
        return (
            <View style={styles.container}>
            <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text><View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={styles.subtext}>详情</Text><Image style={{ width: getPixel(6), height: getPixel(12), marginLeft: getPixel(5) }} source={require('../static/right.png')} /></View>
                </View>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        marginVertical:getPixel(5),
        width: getPixel(355),
    },
    title: {
        flexDirection:'row',
        height:getPixel(66),
        marginHorizontal: getPixel(15),
        justifyContent:'space-between',
        alignItems:'center',
    },
    text: {
        fontSize:getPixel(16),
        color:'#333333',
    },
    subtext:{
        fontSize:getPixel(14),
        color:'#666666'
    },
})
export default AchievementTable;