
import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {Echarts} from 'react-native-secharts';
import {getPixel} from './util';
var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];
var option = {
    grid: {
        left: '10%',
        top: '12%',
        right: '0%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '-15',
        axisLabel: {
            textStyle: {
                color: 'black',
                fontSize: '16',
                fontWeight:'bold',
            },
            z:4,
        },
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        data: ['3单', '3单', '3单', '3单', '3单', '3单', '3单', '3单', '3单', '3单']
    }, {
        name: '分拨延误TOP 10',
        nameGap: '50',
        nameTextStyle: {
            color: '#ffffff',
            fontSize: '16',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(100,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#feffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#ee2147',
                    barBorderRadius: 15,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            barWidth: 24,
            
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            color:'#5788ff',
            yAxisIndex: 2,
            symbolSize: getPixel(24),
            z:3,
        }
    ]
};



class TopChart extends Component {
    
    render(){
        return (
            <View style={styles.container}>
            <Echarts option={option} width={getPixel(355)} height={getPixel(706)} />
            </View>
        )        
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        width: getPixel(355),
        marginVertical:getPixel(5),
    }
})
export default TopChart;