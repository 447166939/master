import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import {Echarts} from 'react-native-secharts';
import {getPixel} from '../../common/util';

class FunnelChart extends Component {
    gotoDetail=()=>{
        this.props.navigation.navigate('AnalycyDetail');
    }
    render(){
        let {data,title}=this.props;
        let sortData=data.sort(function(a,b){return (a.value-b.value)})
        let min=sortData[0].value;
        let len=sortData.length;
        let max=sortData[len-1].value;
              
        let option = {           
        
            series: [
                {
                    name:'漏斗图',
                    type:'funnel',
                    left: 'center',
                    top: getPixel(30),
                    //x2: 80,
                    bottom: getPixel(20),
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min,
                    max,
                    minSize: getPixel(60),
                    maxSize: getPixel(200),
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{b}  {c}',
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        color:({dataIndex})=>['#FAD70F','#F7A705','#5788ff','#92d22c','#34579f'][dataIndex]
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data,
                },
                {
                    name:'漏斗图1',
                    type:'funnel',
                    left: 'center',
                    top: getPixel(30),
                    //x2: 80,
                    bottom: getPixel(20),
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min,
                    max,
                    minSize: getPixel(60),
                    maxSize: getPixel(200),
                    sort: 'descending',
                    gap: 2,
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: '{d}%',
                    },
                    labelLine: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 1,
                        color:({dataIndex})=>['#FAD70F','#F7A705','#5788ff','#92d22c','#34579f'][dataIndex]
                    },
                    emphasis: {
                        label: {
                            fontSize: 20
                        }
                    },
                    data,
                }
            ]
        };
        return (
            <View style={styles.container}>
            <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                    <TouchableOpacity onPress={this.gotoDetail}><View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={styles.subtext}>详情</Text><Image style={{ width: getPixel(6), height: getPixel(12), marginLeft: getPixel(5) }} source={require('../../static/right.png')} /></View></TouchableOpacity>
            </View>
            <Echarts option={option} width={getPixel(355)} height={getPixel(274)} />           
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        width:getPixel(355),
        height:getPixel(340),
        marginVertical:getPixel(5),
        backgroundColor:'#daeadf'
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
})
export default FunnelChart;