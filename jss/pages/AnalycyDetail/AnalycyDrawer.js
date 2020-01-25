import React,{Component} from 'react';
import {StyleSheet,View,Text,Dimensions,Image,TouchableOpacity} from 'react-native';
import {getPixel} from '../../common/util'
import {Button} from '@ant-design/react-native';
import {observer} from 'mobx-react';
import appState from '../../store/dashboard'
const {height}=Dimensions.get('window')
@observer
export default class AnalycyDrawer extends Component {
    componentDidMount(){
        appState.fetchSelectData('https://facebook.github.io/react-native/movies.json')
    }
    goToCalendar=()=>{
        this.props.navigation.navigate('AnalycyCalendar')
    }
    goToSelectDepartment=()=>{
        appState.closeAnalycyDrawer();
        this.props.navigation.navigate('SelectDepartment')
    }
    render(){
        const shijianBtnList=[{title:'近一个月'},{title:'近3个月'},{title:'近半年'}]
        return (
            <View style={styles.container}>
            <View style={styles.header}><Text style={styles.headerTxt}>数据筛选</Text><TouchableOpacity activeOpacity={0.1} style={styles.close} onPress={this.props.closeDrawer}><Image style={styles.closeIcon} source={require('../../static/close.png')}></Image></TouchableOpacity></View>
            <View style={styles.label}><Text style={styles.labelTxt}>时间</Text></View>
            <View style={styles.btnGroup}>
            {shijianBtnList.map((item,index)=>(
                <Button style={styles.btn}  key={index}  size="small">{item.title}</Button>
            ))}
            </View>

            

            <View style={styles.label}><Text style={styles.labelTxt}>自定义时间段</Text></View>
            <TouchableOpacity onPress={this.goToCalendar} style={{marginTop:getPixel(5)}}><View style={styles.picker}><Image source={require('../../static/add.png')} style={styles.icon}></Image><Text style={styles.pickTxt}>选择时间范围</Text></View></TouchableOpacity>

            <View style={styles.label}><Text style={styles.labelTxt}>部门</Text></View>
            <TouchableOpacity onPress={this.goToSelectDepartment} style={{marginTop:getPixel(5)}}><View style={styles.picker}><Image source={require('../../static/add.png')} style={styles.icon}></Image><Text style={styles.pickTxt}>选择部门</Text></View></TouchableOpacity>

            <View style={styles.label}><Text style={styles.labelTxt}>人员</Text></View>
            <View style={styles.contacts}>{appState.members.map((item,index)=>{
                return (<View key={index} style={styles.contactsItem}><Image style={styles.userImg} source={require('../../static/user.jpeg')}></Image><Text>{item.name}</Text></View>)
            })}<View style={styles.contactsItem}><Image source={require('../../static/add.png')}></Image><Text>更多</Text></View></View>

            <View style={styles.footer}><Button style={{flex:1,marginRight:getPixel(5)}} size="large">重置</Button><Button type="primary" style={{flex:1}} size="large">确定</Button></View>


            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        marginRight:0,
        height,
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:getPixel(10),        
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:getPixel(5),
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
    picker: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#cccccc',
        marginBottom: getPixel(10),
    },
    icon:{
        width:getPixel(30),
        height:getPixel(30),
        marginLeft:getPixel(5),
    },
    pickTxt: {
        fontSize:14,
        fontWeight:'100',
        color:'#cccccc',
        marginLeft:getPixel(5)
    },
    contacts: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:getPixel(5)
    },
    contactsItem: {
        width:getPixel(50),
        height:getPixel(65),
        justifyContent:'center',
        alignItems:'center'
    },
    userImg: {
        width:getPixel(50),
        height:getPixel(50),
        borderRadius:getPixel(25),
    },
    footer: {
        position:'absolute',
        bottom:getPixel(5),
        flexDirection:'row',
        left:getPixel(5),
        right:getPixel(5),
    }
})