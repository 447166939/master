import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import {getPixel} from '../../common/util';
class Header extends Component {
    handleBack=()=>{
        const {navigation}=this.props;
        navigation.goBack();
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.1} onPress={this.handleBack} style={{flex:1,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}><View><Image style={[styles.icon,{marginLeft:getPixel(10)}]} source={require('../../static/back.png')}></Image></View></TouchableOpacity>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:18,fontWeight:'bold',color:'#333333'}}>业绩目标完成度</Text></View>
                <TouchableOpacity  activeOpacity={0.1} style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}} onPress={this.props.openDrawer}><View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',marginRight:getPixel(20)}}><Image style={styles.icon} source={require('../../static/search1x.png')}></Image><Text style={{color:'#5788ff',fontSize:16}}>筛选</Text></View></TouchableOpacity>
            </View>
        )
    }
}
export default Header;
const styles=StyleSheet.create({
    container:{
        width:getPixel(375),
        height:getPixel(44),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    icon: {
        width:getPixel(10),
        height:getPixel(20),
    }
})