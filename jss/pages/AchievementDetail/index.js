import React,{Component} from 'react';
import {View,StyleSheet,Image,Text} from 'react-native';
import Bar from './Bar';
import {getPixel} from '../../common/util';
import {achievementData} from '../../data/achievementDetail.json';

class AchievementDetail extends Component {
    static navigationOptions={
        headerLeft:<Image style={{width:getPixel(10),height:getPixel(20),marginLeft:getPixel(10)}} source={require('../../static/back.png')}></Image>,
        headerRight:<View><Text style={{fontSize:getPixel(16),color:'#5788ff',marginRight:getPixel(20)}}>筛选</Text></View>,
        title:'业绩目标完成度',
        headerTitleStyle: {flex:1,textAlign:'center'}
    }
    render(){
        return (
            <View style={styles.container}>
            <Bar data={achievementData} />
            </View>
        )
    }
}
export default AchievementDetail;
const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
    },
})