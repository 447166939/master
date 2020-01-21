import React,{Component} from 'react';
import {View,StyleSheet,Image,Text,ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Bar from './Bar';
import {getPixel,money} from '../../common/util';
import {observer } from 'mobx-react';
import appState from '../../store/dashboard'

@observer
class AchievementDetail extends Component {
    static navigationOptions=({navigation})=>{ 
    return {
        headerLeft:<Image style={{width:getPixel(10),height:getPixel(20),marginLeft:getPixel(10)}} source={require('../../static/back.png')}></Image>,
        headerRight:<TouchableOpacity activeOpacity={0.1} onPress={()=>{}}><View><Text style={{fontSize:16,color:'#5788ff',marginRight:getPixel(20)}}>筛选</Text></View></TouchableOpacity>,
        title:'业绩目标完成度',
        headerTitleStyle: {flex:1,textAlign:'center'}
    }
}
componentDidMount(){
    appState.fetchAchieveData('https://facebook.github.io/react-native/movies.json')
}
    renderDateItem = ({item})=>{
        return <View style={{width:getPixel(100),justifyContent:'center',alignItems:'center',height:getPixel(40),backgroundColor:'#ffffff',}}><Text style={{fontSize:14,fontWeight:'100',color:'#666666'}}>{item}</Text></View>
    }
    separatorComponent=()=>{
        return <View style={{borderWidth:getPixel(0.5),borderColor:'#e5e5ea',width:'100%'}}></View>
    }
    headerComponent=()=>{
        return <View style={{height:getPixel(40),justifyContent:'center',alignItems:'center',backgroundColor:'#f1f1f1',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold'}}>时间</Text></View>
    }
    renderScrollTable=({item})=>{
        return (
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',}}><Text style={{fontSize:14,fontWeight:'100',color:'#666666'}}>{item}</Text></View>
             )
    }
    scrollHeaderComponent=()=>{
        return (
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:getPixel(40),backgroundColor:'#f1f1f1'}}>
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold'}}>目标金额</Text></View>
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold',}}>成交金额</Text></View>
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold'}}>成交订单</Text></View>
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold'}}>完成率</Text></View>
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold'}}>平均客单价</Text></View>
            </View>
        )
    }
    render(){
        const {achievementData=[],achievementList=[]}=appState.achieveData;
        const amount =achievementList.reduce(function(s,i){return (s+Number(i.amount))},0);
        const target=achievementList.reduce(function(s,i){return (s+Number(i.target))},0);
        const percent=Number(Number(amount)/Number(target)*100).toFixed(2);
        const date=achievementList.map(item=>item.date)
        const scrollData=achievementList.map(item=>[`￥${money(item.target)}`,`￥${money(item.amount)}`,item.number,item.percent,`￥${money(item.average)}`]);
        const scrollTableData=scrollData.reduce(function(s,i){return (s.concat(i))},[])
       
        return (
            
                
            <ScrollView>
                <View style={styles.container}>
                    <Bar data={achievementData} />
                    <View style={styles.middleTable}>
                        <View style={styles.col}>
                            <Text style={{ color: '#666666', fontWeight: '100', fontSize: 14, marginBottom: getPixel(5) }}>目标金额</Text><Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold', marginTop: getPixel(5) }}>{`￥${money(target, 2)}`}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={{ color: '#666666', fontWeight: '100', fontSize: 14, marginBottom: getPixel(5) }}>成交金额</Text><Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold', marginTop: getPixel(5) }}>{`￥${money(amount)}`}</Text>
                        </View>
                        <View style={styles.col}>
                            <Text style={{ color: '#666666', fontWeight: '100', fontSize: 14, marginBottom: getPixel(5) }}>完成率</Text><Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold', marginTop: getPixel(5) }}>{`${percent}%`}</Text>
                        </View>
                    </View>
                    <View style={styles.downTable}>
                        <View style={styles.fixedTable}>
                            <FlatList
                                keyExtractor={(item, index) => ('#' + index)}
                                data={date}
                                renderItem={this.renderDateItem}
                                ListHeaderComponent={this.headerComponent}
                                ItemSeparatorComponent={this.separatorComponent}
                            />
                        </View>
                        <ScrollView style={styles.scrollTable} horizontal={true}>
                            <FlatList
                                keyExtractor={(item, index) => ('#' + index)}
                                data={scrollTableData}
                                numColumns={5}
                                ListHeaderComponent={this.scrollHeaderComponent}
                                ItemSeparatorComponent={this.separatorComponent}
                                renderItem={this.renderScrollTable}
                            />
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
export default AchievementDetail;
const styles=StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
    },
    middleTable:{
        width:getPixel(355),
        height:getPixel(100),
        margin:getPixel(10),
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    col: {
        flex:1,
        height:getPixel(100),
        alignItems:'center',
        justifyContent:'center',
    },
   downTable:{
       marginLeft:getPixel(10),
       flexDirection:'row',
       alignSelf:'flex-start',
   },
   fixedTable:{
       width:getPixel(100),
       marginLeft:0,
   },
   scrollTable:{
   }
})