import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {Echarts} from 'react-native-secharts';
import {getPixel} from '../../common/util';



class Chart extends Component {
    goToDetail=()=>{
        const {navigation}=this.props;
        navigation.navigate('AchievementDetail');
    }    
    render(){
        const {title,numOfCompleted,numOfTarget}=this.props;
        let option={
            color: ['#5788ff','#f1f1f1'],
         title: {
             text: '完成度',
             textAlign:'center',
             textVerticalAlign:'middle',
             textStyle:{
                 color: '#666666',
                 fontSize:14,
                 fontWeight:'100',
             },
             subtextStyle:{
                 color:'#5788ff',
                 fontSize:28,
                 fontWeight:'bold',
             },
             x: '49%',
             y: '30%',
             subtext: `${numOfCompleted/numOfTarget*100}%`,
 
         },
         legend:{show:false},
         series:[
             {
                 name: '完成度',
                 type: 'pie',
                 hoverAnimation:false,
                 radius: ['80%', '100%'],
                 avoidLabelOverlap: false,
                 left: 0,
                 center: ['50%', '50%'],
                 label: {show: false},
                 data: [
                     { value: numOfCompleted, name: '完成数量' },
                     { value: numOfTarget-numOfCompleted, name: '未完成数量数量' },
                 ]
             }
         ]
 
        };
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                    <TouchableOpacity activeOpacity={0.1} onPress={this.goToDetail}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={styles.subtext}>详情</Text><Image style={{ width: getPixel(6), height: getPixel(12), marginLeft: getPixel(5) }} source={require('../../static/right.png')} />
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.echartWrapper}>
                        <Echarts option={option} width={getPixel(150)} height={getPixel(150)} />
                    </View>
                    <View style={styles.rightContent}>
                    <View style={{marginLeft:getPixel(30),width:getPixel(60),justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:14,color:'#666666',fontWeight:'100'}}>完成数量</Text>
                    <Text style={{fontSize:24,fontWeight:'bold',color:'#000a22'}}>{numOfCompleted}</Text>
                    <Text style={{color:'#666666',fontWeight:'100'}}>目标数量</Text>
                    <Text style={{fontSize:24,fontWeight:'bold',color:'#000a22'}}>{numOfTarget}</Text>
                    </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default Chart;
const styles=StyleSheet.create({
    container: {
        width: getPixel(355),
        marginVertical:getPixel(5),
    },
    title: {
        flexDirection:'row',
        height:getPixel(66),
        marginHorizontal: getPixel(15),
        justifyContent:'space-between',
        alignItems:'center',
    },
    text: {
        fontSize:16,
        color:'#333333',
    },
    subtext:{
        fontSize:14,
        color:'#666666'
    },
    content:{
        height:getPixel(170),
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-start',
    },
    echartWrapper:{
        width:getPixel(150),
        height:getPixel(150),
    },
    rightContent:{
        width:getPixel(190),
        height:getPixel(150),
        alignItems:'flex-start',
        justifyContent:'center',
    },
})