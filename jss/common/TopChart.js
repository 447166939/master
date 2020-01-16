
import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {Echarts} from 'react-native-secharts';
import {getPixel,money} from './util';




class TopChart extends Component {
    
    render(){
        const {data,title}=this.props;
        let name=data.map(item=>item.name);
        let amount=data.map(item=>item.amount);
        let quantity=data.map(item=>item.quantity);
        max=new Array(10).fill(amount[0])
        let option = {
            grid: {
                left: '10%',
                top:getPixel(20),
                right: '0%',
                bottom: 0,
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: getPixel(-20),
                z: 3,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: getPixel(16),
                        fontWeight: 'bold',
                    }
                },
                data: name
            }, {
                axisTick: 'none',
                axisLine: 'none',
                inverse: true,
                data: [],
            }, {
                show: false,
                axisLine: 'none',
                data: [],

            },{
                axisLine:'none',
               show:false,
                data: []
            }
            ],
            series: [{
                name: '条',
                color: '#5788ff',
                type: 'bar',
                yAxisIndex: 0,
                data: amount,
                label: {
                    normal: {
                        show: true,
                        formatter:'￥{c}',
                        position: [200, -15],
                        textStyle: {
                            color: '#333333',
                            fontSize: getPixel(16),
                            fontWeight: 'bold',
                        }
                    },
                },
                itemStyle: {
                    barBorderRadius: getPixel(15),
                },
                barWidth: getPixel(20),
                z: 2
            }, {
                name: '白框',
                color: '#f1f1f1',
                type: 'bar',
                yAxisIndex: 1,
                data: max,
                barWidth: 20,
                itemStyle: {
                    normal: {
                        barBorderRadius: getPixel(15),
                    }
                },
                z: 1
            },
            {
                name: '外圆',
                type: 'scatter',
                label: {
                    show: true, position: 'inside',
                    formatter: ({ data, dataIndex }) => dataIndex == 0 ? 10 : `0${10 - dataIndex}`,
                },
                hoverAnimation: false,
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                itemStyle: {
                    color: '#5788ff',
                    opacity: 1,
                },
                color: '#5788ff',
                yAxisIndex: 2,
                symbolSize: getPixel(28),
                z: 4,
            },{
                name:'单数',
                color: '#5788ff',
                type: 'bar',
                yAxisIndex: 3,
                data: quantity,
                label: {
                    show:true,
                    normal: {
                        show: true,
                        position: [280, -15],
                        formatter:"{c}单",
                        textStyle: {
                            color: '#333333',
                            fontSize: getPixel(14),
                            fontWeight: 'lighter',
                        }
                    },
                },
                itemStyle: {
                    barBorderRadius: getPixel(15),
                },
                barWidth: getPixel(20),
                z: 2,
            }
            ]
        };
        return (
            <View style={styles.container}>
            <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text><View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={styles.subtext}>详情</Text><Image style={{ width: getPixel(6), height: getPixel(12), marginLeft: getPixel(5) }} source={require('../static/right.png')} /></View>
                </View>
            <Echarts option={option} width={getPixel(355)} height={getPixel(640)} />
            </View>
        )        
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
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
        fontSize:getPixel(16),
        color:'#333333',
    },
    subtext:{
        fontSize:getPixel(14),
        color:'#666666'
    },
})
export default TopChart;