import React,{PureComponent} from 'react';
import {StyleSheet,View,Text,ScrollView,FlatList} from 'react-native';
import {observer} from 'mobx-react';
import appState from '../../store/dashboard'
import Bar from './DepartmentBar';
import {getPixel,money} from '../../common/util'
@observer
export default class Department extends PureComponent{
    renderFiexedCol=({item})=>{
        return (
            <View style={{width:getPixel(140),flexDirection:'row'}}>
                <View style={{width:getPixel(70),justifyContent:'center',alignItems:'center',height:getPixel(40),backgroundColor:'#ffffff',}}><Text>{item.order}</Text></View>
                <View style={{width:getPixel(70),justifyContent:'center',alignItems:'center',height:getPixel(40),backgroundColor:'#ffffff',}}><Text>{item.department}</Text></View>
            </View>
        )

    }
    separatorComponent=()=>{
        return <View style={{borderWidth:getPixel(0.5),borderColor:'#e5e5ea',width:'100%'}}></View>
    }
    fixedColHeader=()=>{
        return (
            <View style={{width:getPixel(140),flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <View style={{ width:getPixel(70),height: getPixel(40), justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>排名</Text></View>
                <View style={{ width:getPixel(70),height: getPixel(40), justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1f1f1', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>部门名称</Text></View>
            </View>
        )
    }

    renderScrollTable=({item})=>{
        return (
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',}}><Text style={{fontSize:14,fontWeight:'100',color:'#666666'}}>{item}</Text></View>
             )
    }
    scrollHeaderComponent=()=>{
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: getPixel(40), backgroundColor: '#f1f1f1' }}>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>目标金额</Text></View>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold', }}>成交金额</Text></View>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>完成率</Text></View>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>成交金额占比</Text></View>
            </View>
        )
    }
    render(){
        const {sortDepartment}=appState.rankingListData;
        const amount =sortDepartment.reduce(function(s,i){return (s+Number(i.amount))},0);
        const target=sortDepartment.reduce(function(s,i){return (s+Number(i.target))},0);
        const percent=Number(Number(amount)/Number(target)*100).toFixed(2);
        const scrollData=sortDepartment.map(item=>[`￥${money(item.target)}`,`￥${money(item.amount)}`,`${item.completeRate}`,`${item.amountRate}`]);
        const scrollTableData=scrollData.reduce(function(s,i){return (s.concat(i))},[])
        return (
            <ScrollView>
            <View style={styles.container}>
                <Bar data={sortDepartment} />
                <View style={styles.middleTable}>
                    <View style={styles.col}>
                        <Text style={{color:'#666666',fontWeight:'100',fontSize:14,marginBottom:getPixel(5)}}>目标金额</Text><Text style={{color:'#333333',fontSize:16,fontWeight:'bold',marginTop:getPixel(5)}}>{`￥${money(target,2)}`}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={{color:'#666666',fontWeight:'100',fontSize:14,marginBottom:getPixel(5)}}>成交金额</Text><Text style={{color:'#333333',fontSize:16,fontWeight:'bold',marginTop:getPixel(5)}}>{`￥${money(amount)}`}</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={{color:'#666666',fontWeight:'100',fontSize:14,marginBottom:getPixel(5)}}>完成率</Text><Text style={{color:'#333333',fontSize:16,fontWeight:'bold',marginTop:getPixel(5)}}>{`${percent}%`}</Text>
                    </View>
                </View>

                <View style={styles.downTable}>
                        <View style={styles.fixedTable}>
                            <FlatList
                            keyExtractor={(item,index)=>('#'+index)}
                            data={sortDepartment}
                            renderItem={this.renderFiexedCol}
                            ListHeaderComponent={this.fixedColHeader}
                            ItemSeparatorComponent={this.separatorComponent}
                            />
                        </View>
                        <ScrollView style={styles.scrollTable} horizontal={true}>
                        <FlatList
                        keyExtractor={(item,index)=>('#'+index)}
                        data={scrollTableData}
                        numColumns={4}
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
        width:getPixel(140),
        marginLeft:0,
    },
    scrollTable:{
    }
})