import React,{Component} from 'react';
import {StyleSheet,View} from 'react-native';
import {observer } from 'mobx-react';
import { toJS } from 'mobx';
import SegmentedControlTab from "react-native-segmented-control-tab";
import appState from '../../store/dashboard';
import {getPixel} from '../../common/util';
@observer
export default class Title extends Component {
    
    render(){

        return <SegmentedControlTab
        tabsContainerStyle={styles.tabsContainerStyle}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
              values={["个人排名", "部门排名"]}
              selectedIndex={appState.selectedIndex}
              onTabPress={appState.handleIndexChange}
        />
    }
}
const styles=StyleSheet.create({
    tabsContainerStyle:{
        width:getPixel(180),
        marginLeft:getPixel(40),
    },
    activeTabStyle:{
        backgroundColor:'#5788ff',
    },
    tabStyle:{
        backgroundColor:'#ffffff'
    }
})