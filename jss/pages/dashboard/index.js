import React, { Component } from 'react'
import { StyleSheet,Text, ScrollView,Image,View } from 'react-native';
import Chart from './Chart';
import Chart1 from './Chart1';
import TopChart from './TopChart';
import FunnelChart from './FunnelChart';
import AchievementTable from './AchievementTable';
import {getPixel} from '../../common/util';
import {top,funnelData,achievementData,visitInfo,buyInfo,info} from '../../data/dashboard';


export default class Dashboard extends Component {
  
  
  render() {   
    return (
      <ScrollView>
      <View style={styles.container}>
      <Chart title="到访业绩" numOfCompleted={visitInfo.numOfCompleted} numOfTarget={visitInfo.numOfTarget}/>
      <Chart title="认购业绩" numOfCompleted={buyInfo.numOfCompleted} numOfTarget={buyInfo.numOfTarget} />
      <Chart1 title="正签业绩" numOfCompleted={info.numOfCompleted} numOfTarget={info.numOfTarget} total={info.total}/>
      <TopChart data={top} title="正签业绩排名"/>
      <FunnelChart data={funnelData} title="销售漏斗"/>
      <AchievementTable title="正签业绩回顾" data={achievementData} />
      </View>
      </ScrollView>      
    )
  }
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop:getPixel(5),
  }
})

