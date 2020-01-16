/**
 * Created by Administrator on 2017/3/31 0031.
 */
// import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation'
import Crm from './jss/pages/crm';
import Data from './jss/pages/dashboard';
import Schedule from './jss/pages/schedule';
import Todo from './jss/pages/todo';
const App = createMaterialTopTabNavigator(
  {
    Crm: {
      screen: Crm,
      navigationOptions: {
        title: 'crm'
      }
    },
    
    Schedule: {
      screen: Schedule,
      navigationOptions: {
        title: '今日日程'
      }
    },
    Data: {
      screen: Data,
      navigationOptions: {
        title: '数据看板'
      }
    },
    Todo: {
      screen: Todo,
      navigationOptions: {
        title: '待办事项'
      }
    }
  },
  {
    tabBarPosition: 'top', //标签栏在屏幕顶部还是底部
    // swipeEnabled:true,           //是否可以滑动切换标签
    // backBehavior:'none',         //andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
    lazy: false, //是否只渲染显示的标签
    animationEnabled: true, //标签切换是否有动画效果

    tabBarOptions: {
      activeTintColor: '#000', //标签栏激活字体颜色
      inactiveTintColor: '#000000', //标签栏未激活字体颜色
      showLabel: true, //是否显示标签栏
      labelStyle: { fontSize: 14 }, //标签样式(可设置字体大小等)
      showIcon: true, //是否显示标签栏上图标
      scrollEnabled: false, //是否可以滚动标签栏目(当tab总数超过一屏)
      indicatorStyle: { height: 1, backgroundColor: '#0000ff' }, //指示器样式 height：0则不显示
      style: { backgroundColor: '#fff', height: 70 } //设置整个tabbar样式(背景颜色等)
      // tabStyle:{backgroundColor:'#ffffff', height:50},//设置单个tabbar样式
    }
  }
)
export default App
