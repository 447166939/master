import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {Echarts} from 'react-native-secharts';
import {getPixel} from '../../common/util';

class Bar extends Component {
    render(){
        const {data}=this.props;
        const top10=data.slice(0,10);
        const yLabel=top10.map(({name})=>name)
        const target=top10.map(({target})=>target)
        const amount=top10.map(({amount})=>amount)
        const option={
            grid:{
                left:getPixel(60),
                top:getPixel(10),
                bottom:getPixel(60)
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis:{
                type:'value',
                splitLine:{show:false},
                min:0,
                max:3000000,
                axisLabel:{rotate:-45,color:'black'},
                axisLine:{show:false},
                axisTick:{show:false}
            },
            yAxis:{
                data: yLabel,
                type:'category',
                axisLabel:{color:'black'},
                axisLine:{show:true,lineStyle:{color:'#cccccc',width:getPixel(3)}},
                axisTick:{
                    show:true,
                    lineStyle:{
                        width:getPixel(2),
                    }
                }
            },
            series: [
                {
                    name:'目标金额',
                    type:'bar',
                    barCategoryGap: '50%',
                    barGap:'20%',
                    itemStyle:{
                        color:'#5788ff'                     
                       

                    },
                    data:target
                },
                {
                    name:'成交金额',
                    type:'bar',
                    barCategoryGap: '50%',
                    BarGap:'20%',
                    itemStyle:{
                        
                        color:'#54ff9f'
                       
                    },
                    data:amount,
                },
                
            ]

        }
        return (
            <View style={styles.container}>
            <Echarts option={option} width={355} height={300} />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        width:getPixel(355),
        height:getPixel(300),
        marginVertical:getPixel(10)
    }
});
export default Bar;