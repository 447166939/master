import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native';
import {getPixel} from '../../common/util';
import {Button} from '@ant-design/react-native';

const {height} =Dimensions.get('window')
export default class RankingDrawer extends Component {
    render(){
        const leixingBtnList=[{title:'成交金额'},{title:'回款金额'},{title:'新增客户'},{title:'新增商机'},{title:'跟进次数'}]
        const shijianBtnList=[{title:'2019年'},{title:'2018年'},
        {title:'2017年'},{title:'2016年'},{title:'2015年'}]
        return (
            <View style={styles.container}>
                <View style={styles.header}><Text style={styles.headerTxt}>数据筛选</Text><TouchableOpacity activeOpacity={0.1} style={styles.close} onPress={this.props.closeDrawer}><Image style={styles.closeIcon} source={require('../../static/close.png')}></Image></TouchableOpacity></View>
                <View style={styles.label}><Text style={styles.labelTxt}>类型</Text></View>
                <View style={styles.btnGroup}>
                    {leixingBtnList.map((item, index) => (
                        <Button style={styles.btn} key={index} size="small">{item.title}</Button>
                    ))}
                </View>

                <View style={styles.label}><Text style={styles.labelTxt}>时间</Text></View>
                <View style={styles.btnGroup}>
                    {shijianBtnList.map((item, index) => (
                        <Button style={styles.btn} key={index} size="small">{item.title}</Button>
                    ))}
                </View>
                <View style={styles.footer}><Button style={{flex:1,marginRight:getPixel(5)}} size="large">重置</Button><Button type="primary" style={{flex:1}} size="large">确定</Button></View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:getPixel(10),
        height,    
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:getPixel(5),
        height:getPixel(40)
    },
    headerTxt: {
        fontSize:18,
        fontWeight:'bold',
        color:'#333333',
    },
    close:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row'
    },
    closeIcon: {
        width:getPixel(20),
        height:getPixel(20),
    },
    label: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:getPixel(5)
    },
    labelTxt: {
        fontSize:16,
        fontWeight:'100',
        color:'#333333',
    },
    btnGroup: {
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    btn: {
        width:getPixel(75),
        height:getPixel(30),
        marginBottom:getPixel(10),
        marginRight:getPixel(10),
    },
    footer: {
        position:'absolute',
        bottom:getPixel(5),
        flexDirection:'row',
        left:getPixel(5),
        right:getPixel(5),
    }
})