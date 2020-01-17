import React,{Component} from 'react';
import {StyleSheet,View,FlatList,Image,Text} from 'react-native';
import {getPixel} from '../../common/util';

class AchievementTable extends Component {
    renderItem=({item})=>{
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{marginVertical:getPixel(13),color:'#666666',fontSize:getPixel(14)}}>{item.date}</Text></View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{marginVertical:getPixel(13),color:'#666666',fontSize:getPixel(14)}}>{item.quantity}</Text></View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{marginVertical:getPixel(13),color:'#666666',fontSize:getPixel(14)}}>{item.percent}</Text></View>
            </View >
        )
    }
    seperatorComponent=()=>{
        return (
            <View style={{width:'100%',height:getPixel(1),backgroundColor:'#f1f1f1'}}></View>
        )
    }
    headerComponent=()=>{
        return (
            <View style={{ flexDirection: 'row',backgroundColor:'#f1f1f1'}}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{marginVertical:getPixel(13),fontSize:getPixel(14),color:'#333333'}}>时间</Text></View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{marginVertical:getPixel(13),fontSize:getPixel(14),color:'#333333'}}>正签单量</Text></View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{marginVertical:getPixel(13),fontSize:getPixel(14),color:'#333333'}}>业绩达成率</Text></View>
            </View >
        )
    }
    render(){
        const {title,data}=this.props;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.text}>{title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}><Text style={styles.subtext}>详情</Text><Image style={{ width: getPixel(6), height: getPixel(12), marginLeft: getPixel(5) }} source={require('../../static/right.png')} />
                    </View>
                </View>
                <View style={{marginHorizontal:getPixel(15)}}>
                <FlatList 
                data={data}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.seperatorComponent}
                ListHeaderComponent={this.headerComponent}
                />
                </View>
                </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        marginVertical:getPixel(5),
        width: getPixel(355),
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
export default AchievementTable;