import React, { Component, PureComponent } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import data from './../../data/dataDashs.json'
import {getPixel} from './../../common/utils'
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
export default class Data extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }
  render() {
    const { navigate } = this.props.navigation
    const { data, dataTime, list } = this.state.data
    const week = ['日', '一', '二', '三', , '四', '五', '六']
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '94.6%',
            fontSize: getPixel(12)
          }}
        >
          <View style={styles.dataTime}>
            <Text style={styles.datates}>{data}</Text>
            <Text style={{ color: '#5788FF' }}>回到今天</Text>
            <Text
              style={styles.tips}
              onPress={() => {
                navigate('ScheduleDetail')
              }}
            >
              查看更多
            </Text>
          </View>
          <View style={styles.contaniner}>
            <View style={styles.week}>
              {week.map((item, index) => {
                return (
                  <Text key={index} style={[styles.weekItem]}>
                    {item}
                  </Text>
                )
              })}
            </View>
            <View style={styles.week}>
              {dataTime.map((item, index) => {
                return (
                  <View style={[styles.weekItem]} key={index}>
                    <View style={item.status ? styles.select : ''}>
                      <Text
                        style={
                          (styles.weight, item.status ? styles.colorwhite : '')
                        }
                      >
                        {item.time}
                      </Text>
                    </View>
                    <View style={item.stattus ? styles.mniradious : ''}>
                      <Text></Text>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </View>
        <View style={styles.list}>
          {list.map((item, index) => {
            return (
              <View key={index} style={styles.item}>
                <Statuscompont status={item.status} types={2} />
                <View style={styles.content}>
                  <Text style={{ fontSize: getPixel(12) }}>{item.time}</Text>
                  <Text style={{ marginTop: getPixel(10), fontWeight: '900' }}>
                    {item.title}
                  </Text>
                </View>
                <View style={styles.listData}>
                  <Statuscompont status={item.status} types={3} />
                  <Statuscompont status={item.status} types={1} />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  colorwhite: {
    color: 'white'
  },
  dataTime: {
    fontSize: getPixel(12),
    marginLeft: getPixel(10),
    marginRight: getPixel(10),
    marginTop: getPixel(10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  datates: {
    fontWeight: '800'
  },
  tips: {
    fontSize: getPixel(12)
  },
  mniradious: {
    width: getPixel(8),
    height: getPixel(8),
    backgroundColor: '#D22C33',
    borderRadius: getPixel(20),
    marginLeft: getPixel(3),
    marginTop: getPixel(4)
  },
  weekDay: {
    alignItems: 'center'
  },
  week: {
    marginLeft: getPixel(10),
    marginRight: getPixel(10),
    marginTop: getPixel(10),
    display: 'flex',
    marginLeft: getPixel(10),
    flexDirection: 'row'
  },
  select: {
    backgroundColor: '#5788FF',
    color: 'white',
    width: getPixel(16),
    borderRadius: getPixel(16)
  },
  weekItem: {
    height: 'auto',
    width: getPixel(50)
  },
  weight: {
    fontWeight: '900'
  },
  list: {
    width: '94.6%',
    display: 'flex',
    marginTop: getPixel(10)
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
    width: '70%'
  },
  listData: {
    width: '30%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  }
})
