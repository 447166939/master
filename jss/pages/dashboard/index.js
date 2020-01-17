import React, { Component } from 'react'
import { StyleSheet,Text, ScrollView,Image,View } from 'react-native';
import Chart from './Chart';
import Chart1 from './Chart1';
import TopChart from './TopChart';
import FunnelChart from './FunnelChart';
import AchievementTable from './AchievementTable';
import {getPixel} from '../../common/util';
import {top,funnelData,achievementData} from '../../data/dashboard';

export default class Dashboard extends Component {
  
  
  render() {
   
    return (
      <ScrollView>
      <View style={styles.container}>
      <Chart title="到访业绩" numOfCompleted={12} numOfTarget={15}/>
      <Chart title="认购业绩" numOfCompleted={8} numOfTarget={10} />
      <Chart1 title="正签业绩" numOfCompleted={8} numOfTarget={10} total={40000}/>
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

