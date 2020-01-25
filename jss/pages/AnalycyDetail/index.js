import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,FlatList} from 'react-native';
import Chart from './Chart';
import {observer} from 'mobx-react';
import appState from '../../store/dashboard'
import {money,getPixel} from '../../common/util'
import {Drawer,Provider} from '@ant-design/react-native';
import AnalycyDrawer from './AnalycyDrawer';
import Header from './Header';

@observer
export default class AnalycyDetail extends Component {
    static navigationOptions={
        header:null
    }
    componentDidMount(){
        appState.fetchAnalycyDetailData('https://facebook.github.io/react-native/movies.json')
    }

    renderLevelItem = ({item})=>{
        return <View style={{width:getPixel(100),justifyContent:'center',alignItems:'center',height:getPixel(40),backgroundColor:'#ffffff',}}><Text style={{fontSize:14,fontWeight:'100',color:'#666666'}}>{item}</Text></View>
    }
    separatorComponent=()=>{
        return <View style={{borderWidth:getPixel(0.5),borderColor:'#e5e5ea',width:'100%'}}></View>
    }
    headerComponent=()=>{
        return <View style={{height:getPixel(40),justifyContent:'center',alignItems:'center',backgroundColor:'#f1f1f1',}}><Text style={{fontSize:14,color:'#333333',fontWeight:'bold'}}>销售阶段</Text></View>
    }
    renderScrollTable=({item})=>{
        return (
            <View style={{width:getPixel(110),height:getPixel(40),justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',}}><Text style={{fontSize:14,fontWeight:'100',color:'#666666'}}>{item}</Text></View>
             )
    }
    scrollHeaderComponent=()=>{
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: getPixel(40), backgroundColor: '#f1f1f1' }}>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>商机数量</Text></View>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold', }}>转化率</Text></View>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>预计销售金额</Text></View>
                <View style={{ width: getPixel(110), height: getPixel(40), justifyContent: 'center', alignItems: 'center', }}><Text style={{ fontSize: 14, color: '#333333', fontWeight: 'bold' }}>概率金额</Text></View>

            </View>
        )
    }
    render(){
        const {data}=appState.analycyDetailData;
        const chartData=data.map((item,index)=>({value:item.chanceNo,name:item.level}))
        const chanceNo=data.reduce((s,i)=>(s+i.chanceNo),0)
        const saleMoney=data.reduce((s,i)=>(s+i.saleMoney),0);
        const probability=data.reduce((s,i)=>(s+i.probability),0)
        let level=data.map((item,index)=>(item.level))
        level=level.concat(['总计'])
        const scrollData=data.map((item,index)=>[`${item.chanceNo}`,`${item.inversionRate}`,`￥${money(item.saleMoney,2)}`,`￥${item.probability}`])
        let scrollTableData=scrollData.reduce(function(s,i){return (s.concat(i))},[])
        scrollTableData=scrollTableData.concat([chanceNo,'-',`￥${money(saleMoney,2)}`,`￥${money(probability,2)}`]);

        return (
            <Provider>
                <Drawer
             sidebar={<AnalycyDrawer navigation={this.props.navigation} closeDrawer={appState.closeAnalycyDrawer}/>}
             open={false}
             position="right"
             drawerWidth={300}
             drawerRef={appState.setAnalycyDrawer}
             drawerBackgroundColor="rgb(0,0,0,.5)"
             >
             <Header openDrawer={appState.openAnalycyDrawer} navigation={this.props.navigation} /> 
                
                <ScrollView>
                    <View style={styles.container}>
                        <Chart navigation={this.props.navigation} data={chartData} title="销售漏斗" />
                        <View style={styles.middleTable}>
                            <View style={styles.col}>
                                <Text style={{ color: '#666666', fontWeight: '100', fontSize: 14, marginBottom: getPixel(5) }}>商机数量</Text><Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold', marginTop: getPixel(5) }}>{chanceNo}</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={{ color: '#666666', fontWeight: '100', fontSize: 14, marginBottom: getPixel(5) }}>预计销售金额</Text><Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold', marginTop: getPixel(5) }}>{`￥${money(saleMoney, 2)}`}</Text>
                            </View>
                            <View style={styles.col}>
                                <Text style={{ color: '#666666', fontWeight: '100', fontSize: 14, marginBottom: getPixel(5) }}>概率金额</Text><Text style={{ color: '#333333', fontSize: 16, fontWeight: 'bold', marginTop: getPixel(5) }}>{`￥${money(probability, 2)}`}</Text>
                            </View>
                        </View>
                        <View style={styles.downTable}>
                            <View style={styles.fixedTable}>
                                <FlatList
                                    keyExtractor={(item, index) => ('#' + index)}
                                    data={level}
                                    renderItem={this.renderLevelItem}
                                    ListHeaderComponent={this.headerComponent}
                                    ItemSeparatorComponent={this.separatorComponent}
                                />
                            </View>
                            <ScrollView style={styles.scrollTable} horizontal={true}>
                                <FlatList
                                    keyExtractor={(item, index) => ('#' + index)}
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
                </Drawer>
            </Provider>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
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