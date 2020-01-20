import React, { Component, PureComponent } from 'react'
import {getPixel} from './../../common/utils'
import { CalendarList } from 'react-native-calendars'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import Header from './../../components/scheduleHeader'
import data from './../../data/schedule.json'
var icon1 = require('./../../static/dashboards/icon01.png')
var icon2 = require('./../../static/dashboards/icon02.png')
var icon3 = require('./../../static/dashboards/icon03.png')
var icon4 = require('./../../static/dashboards/icon04.png')
var icon5 = require('./../../static/dashboards/icon05.png')
var icon6 = require('./../../static/dashboards/icon06.png')
class Statuscompont extends PureComponent {
  render() {
    const { status, types } = this.props
    let result, color, icon
    switch (status) {
      case 1:
        result = '未开始'
        color = '#1AB8DF'
        icon = icon1
        break
      case 2:
        result = '进行中'
        color = '#8138CC'
        icon = icon2
        break
      case 3:
        result = '已超时'
        color = '#FAD70F'
        icon = icon3
        break
      case 4:
        result = '已取消'
        color = '#CCCC'
        icon = icon4
        break
      case 5:
        result = '已完成'
        color = '#5788FF'
        icon = icon5
        break
      case 6:
        result = '未完成'
        color = '#92D22C'
        icon = icon6
        break
      default:
        break
    }
    if (types == 1)
      return <Text style={{ marginLeft: getPixel(20) }}>{result}</Text>
    else if (types == 2) {
      return (
        <View
          style={{
            backgroundColor: color,
            width: getPixel(5),
            height: '100%',
            paddingVertical: getPixel(30),
            borderTopLeftRadius: getPixel(8),
            borderBottomLeftRadius: getPixel(8)
          }}
        >
          <Text></Text>
        </View>
      )
    } else if (types == 3) {
      return <Image source={icon} />
    }
  }
}
export default class Emplyee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerTitle: <Header property={navigation} /> }
  }
  render() {
     const { list } = this.state.data
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CalendarList
            // Enable horizontal scrolling, default = false
            horizontal={true}
            // Enable paging on horizontal, default = false
            pagingEnabled={true}
            // Set custom calendarWidth.
            calendarWidth={getPixel(355)}
            markedDates={{
              '2020-01-16': { selected: true, textColor: 'blue' },
              '2020-01-18': { selected: true, selectedColor: 'blue' }
            }}
          />
          <View style={styles.list}>
            {list.map((item, index) => {
              return (
                <View key={index} style={styles.item}>
                  <Statuscompont status={item.status} types={2} />
                  <View style={styles.content}>
                    <Text style={{ fontSize: getPixel(12) }}>{item.time}</Text>
                    <Text
                      style={{ marginTop: getPixel(10), fontWeight: '900' }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.right}>
                    <View style={styles.listData}>
                      <Statuscompont status={item.status} types={3} />
                      <Statuscompont status={item.status} types={1} />
                    </View>
                    <View style={styles.employee}>
                      <Image style={styles.addImage} source={{ uri: 'http://img.anska.info/avator.jpg' }}></Image>
                      <Text style={{textAlign:'left',marginLeft:getPixel(12)}}> 陈凯</Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: getPixel(355),
    marginLeft: getPixel(10)
  },
  list: {
    width: getPixel(355),
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: getPixel(10)
  },
  addImage: {
    width: getPixel(24),
    height: getPixel(24),
    borderRadius: 12
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: getPixel(10),
    backgroundColor: 'white'
  },
  content: {
    paddingLeft: getPixel(20),
    textAlign: 'right',
    width: '70%',
    fontSize: getPixel(14)
  },
  right: {
    width: "30%",
  },
  listData: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  employee:{
    flexDirection:'row',
    alignItems:'center',
    paddingTop:getPixel(10),
    marginLeft:getPixel(-2)
  }
})
