/**
 * Created by Administrator on 2017/3/31 0031.
 */
import React, { Component } from 'react'
import { View, Dimensions, Platform } from 'react-native'
import { createMaterialTopTabNavigator, StackNavigator } from 'react-navigation'
import Crm from './jss/pages/crm'
import Data from './jss/pages/dashboard'
import Schedule from './jss/pages/schedule'
import Todo from './jss/pages/todo'
import Info from './jss/pages/info'
import  Detail  from "./jss/pages/schedule/rcgldetail";
import ScheduleDetail from './jss/pages/schedule/scheduledetail'
import Emplyee from './jss/pages/schedule/employeeschedule'
import { LocaleConfig } from 'react-native-calendars'
import AddSchedule from './jss/pages/schedule/addSchedule'
import AchievementDetail from './jss/pages/AchievementDetail'
import RankingList from './jss/pages/RankingList'
import SelectDepartment from './jss/pages/SelectDepartment'
import AnalycyDetail from './jss/pages/AnalycyDetail';
import CalendarPage from './jss/pages/AnalycyDetail/Calendar'
LocaleConfig.locales['fr'] = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  monthNamesShort: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi'
  ],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
  today: "Aujourd'hui"
}
LocaleConfig.defaultLocale = 'fr'
let windowSize = Dimensions.get('window')
let IPHONE_X_HEIGHT = 812
let IPHONE_XS_MAX_XR = 896
function isIphoneX() {
  return (
    (Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      windowSize.height === IPHONE_X_HEIGHT) ||
    windowSize.width === IPHONE_X_HEIGHT ||
    windowSize.height === IPHONE_XS_MAX_XR ||
    windowSize.width === IPHONE_XS_MAX_XR
  )
}
let topMargin = Platform.OS === 'ios' ? (isIphoneX() ? 44 : 24) : 0
const TopTabNavigator = createMaterialTopTabNavigator(
  {

    Crm: {
      screen: Crm,
      navigationOptions: {
        title: 'crm'
      }
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: ({ navigation }) => ({
        title: '今日日程',
        tabBarVisible: navigation.state.index > 0 ? false : true
      })
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
    },
    Info: {
      screen: Info,
      navigationOptions: {}
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
      inactiveTintColor: '#000', //标签栏未激活字体颜色
      showLabel: true, //是否显示标签栏
      labelStyle: { fontSize: 12 }, //标签样式(可设置字体大小等)
      showIcon: false, //是否显示标签栏上图标
      scrollEnabled: false, //是否可以滚动标签栏目(当tab总数超过一屏)
      indicatorStyle: {
        height: 3,
        width: 20,
        margin: 'auto',
        backgroundColor: '#0000ff',
        left: '8%'
      }, //指示器样式 height：0则不显示
      style: {
        backgroundColor: '#fff',
        height: 44,
        marginTop: topMargin
      }, //设置整个tabbar样式(背景颜色等)
      tabStyle: { backgroundColor: '#ffffff', height: 48 } //设置单个tabbar样式
    }
  }
)
const ScheduleTotal = StackNavigator({
  TopTabNavigator: {
    screen: TopTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      header: null
    }
  },
  ScheduleDetail: {
    screen: ScheduleDetail
  },
  Emplyee: {
    screen: Emplyee
  },
  Detail:{
    screen:Detail
  },
  AddSchedule:{
    screen:AddSchedule
  },
  AchievementDetail: {
    screen: AchievementDetail
  },
  RankingList: {
    screen: RankingList
  },
  SelectDepartment: {
    screen: SelectDepartment
  },
  AnalycyDetail: {
    screen: AnalycyDetail
  },
  AnalycyCalendar: {
    screen: CalendarPage
  }
})
// var image_icon = './jss/static/notselected2x.png'


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScheduleTotal />
      </View>
    )
  }
}
