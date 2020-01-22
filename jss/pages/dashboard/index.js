import React, { Component } from 'react'
import { StyleSheet,Text, ScrollView,Image,View } from 'react-native';
import Chart from './Chart';
import Chart1 from './Chart1';
import TopChart from './TopChart';
import FunnelChart from './FunnelChart';
import AchievementTable from './AchievementTable';
import {getPixel} from '../../common/util';
import appState from '../../store/dashboard'
import { observer } from 'mobx-react';

@observer
export default class Dashboard extends Component {
  componentDidMount(){
    appState.fetchDashboardData('https://facebook.github.io/react-native/movies.json')

  }  
  
  render() { 
    const {navigation}=this.props; 
    const {visitInfo=[],buyInfo=[],info=[],top=[],funnelData=[],achievementData=[]}=appState.dashboardData; 
    return (
      <ScrollView>
      <View style={styles.container}>
      <Chart title="到访业绩" navigation={navigation} numOfCompleted={visitInfo.numOfCompleted} numOfTarget={visitInfo.numOfTarget}/>
      <Chart title="认购业绩" navigation={navigation} numOfCompleted={buyInfo.numOfCompleted} numOfTarget={buyInfo.numOfTarget} />
      <Chart1 title="正签业绩" navigation={navigation} numOfCompleted={info.numOfCompleted} numOfTarget={info.numOfTarget} total={info.total}/>
      <TopChart navigation={navigation} data={top} title="正签业绩排名"/>
      <FunnelChart navigation={navigation} data={funnelData} title="销售漏斗"/>
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

