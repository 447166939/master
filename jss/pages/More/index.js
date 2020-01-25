import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {getPixel} from '../../common/util';

export default class More extends Component {
    static navigationOptions={
        header:null
    }
    goback=()=>{

    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goback}><View><Text style={styles.closeTxt}>关闭</Text></View></TouchableOpacity><Text style={styles.title}>选择成员</Text>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{flex:1},
    header: {
        height:getPixel(28),
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:getPixel(5),
    },
    closeTxt: {
        color:'#5788ff',
        fontSize:18,
        fontWeight:'100'
    },
    title: {
        marginLeft:getPixel(100),
        fontSize:18,
        fontWeight:'bold',
    }
})