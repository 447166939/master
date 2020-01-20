import React, { Component } from 'react'
import { Text, View, Image ,StyleSheet,Dimensions,Platform,TouchableOpacity,Alert} from 'react-native'
import { ActionSheet, Button } from '@ant-design/react-native';
var changeStattus = require('./../../static/schedule/changestatus.png')
var deleteschedule = require('./../../static/schedule/deleteschedule.png')
var editschedult = require('./../../static/schedule/editshedule.png')
import {getPixel} from './../../common/utils'
export default class Detail extends Component {
    constructor(props){
        super(props)
        this.ondelelte = () => {
            Alert.alert(
                '删除确认',
                '确定要删除这条记录吗？',
                [
                  {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: '确定', onPress: () => console.log('OK Pressed')},
                ],
            )},
            this.state = {
                clicked: 'none',
                clicked1: 'none',
              };
            this.showActionSheet = () => {
                const BUTTONS = [
                  '进行中',
                  '已结束',
                  '已取消',
                  '删除',
                ];
                ActionSheet.showActionSheetWithOptions(
                  {
                    title: '',
                    message: '变更当前状态为',
                    options: BUTTONS,
                    cancelButtonIndex: 3,
                    destructiveButtonIndex: 4,
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                );
              };
              this.showActionSheetNew = () => {
                const BUTTONS = [
                  '新建日程',
                  '新建普通任务',
                  '新建跟进任务',
                  '取消',
                ];
                ActionSheet.showActionSheetWithOptions(
                  {
                    title: '',
                    message: '',
                    options: BUTTONS,
                    cancelButtonIndex: 3,
                    destructiveButtonIndex: 4,
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                );
              };
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    })
    render() {
        return (
            <View style={styles.list}>
                <View style={styles.item}>
                    <Text> 日程标题</Text>
                    <Text>与客户沟通报价事宜</Text>
                </View>
                <View style={styles.item}>
                    <Text>日程状态</Text>
                    <Text>执行中</Text>
                </View>
                <View style={styles.item}>
                    <Text> 开始时间</Text>
                    <Text>2010-01-01 21:47</Text>
                </View>
                <View style={styles.item}>
                    <Text>结束时间</Text>
                    <Text>2010-01-02 21:47</Text>
                </View>
                <View style={styles.item}>
                    <Text>重要程度</Text>
                    <Text>重要</Text>
                </View>
                <View style={styles.item}>
                    <Text>关连业务</Text>
                    <Text style={styles.blueText}>深圳木卫二科技有限公司</Text>
                </View>
                <View style={styles.item}>
                    <Text> 任务提醒</Text>
                    <Text>准时</Text>
                </View>
                <View style={styles.item}>
                    <Text>提醒方式</Text>
                    <Text>系统消息</Text>
                </View>
                <View style={styles.item}>
                    <Text> 创建时间</Text>
                    <Text>2010-01-01 21:47</Text>
                </View>
                <View style={styles.item}>
                    <Text>最后更新</Text>
                    <Text>2010-01-02 21:47</Text>
                </View>
                <View style={styles.listBottom}>
                    <TouchableOpacity style={styles.Vcenter} onPress={()=>this.showActionSheet()}>
                        <Image source={changeStattus} style={styles.imageItem} />
                        <Text style={styles.itemText}>变更状态</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Vcenter} onPress={()=>this.ondelelte()}>
                        <Image source={editschedult} style={styles.imageItem}/>
                        <Text style={styles.itemText}>删除日程</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Vcenter} onPress={()=>this.showActionSheetNew()}>
                        <Image source={deleteschedule} style={styles.imageItem}/>
                        <Text style={styles.itemText}>编辑日程</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
let windowSize = Dimensions.get('window')
let IPHONE_X_HEIGHT = 812
let IPHONE_XS_MAX_XR = 896
function isIphoneX() {
  return (
    (Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      windowSize.height === IPHONE_X_HEIGHT) ||
    windowSize.width === IPHONE_X_HEIGHT ||
    windowSize.height === IPHONE_XS_MAX_XR ||
    windowSize.width === IPHONE_XS_MAX_XR
  )
}
let topMargin = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 24) : 0
console.log('top',topMargin)
const styles = StyleSheet.create({
    list: {
        position:'absolute',
        top:topMargin+(Platform.OS === 'ios' ?40:0),
        width: getPixel(375),
        left:0,
        right:0,
        bottom:0,
        paddingHorizontal:getPixel(10),
        backgroundColor:'white',
        borderTopColor:'#ccc',
        borderTopWidth:getPixel(1),
        
    },
    item:{
        height:50,
        alignItems:'center',
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        paddingVertical:5,
        flexDirection:'row',
        fontSize:getPixel(16),
        justifyContent:'space-between'
    },
    listBottom:{
        position:'absolute',
        bottom:50,
        flexDirection:'row',
        left:0,
        right:0,
        justifyContent:'space-around'
    },
    imageItem:{
        width:getPixel(22),
        height:getPixel(22)
    },
    Vcenter:{
        alignItems:"center"
    },
    itemText:{
        height:40,
        lineHeight:40,
        fontSize:getPixel(12)
    },
    blueText:{
        color:'#5788FF' 
    }
})