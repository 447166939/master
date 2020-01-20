import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native'
import React, { Component } from 'react'
import {getPixel} from './../common/utils'
import headerSelect from './../store/header'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { Button} from '@ant-design/react-native';
const del = require('./../static/delete.png')
const searchicon = require("./../static/search1x.png")
const add_member = require("./../static/add_member.png")
@observer
export default class Header extends Component {
  constructor(props) {
    super(props),
    this.setHeaderStatue=(navigate,buton)=>{
      if(buton=='left'){
        navigate('ScheduleDetail')
        headerSelect.changeHeaderStyle(1)
      }else{
        navigate('Emplyee')
        headerSelect.changeHeaderStyle(0)
      }
    }
  }
  render() {
    const {headerstatus} =headerSelect;
    let data = headerSelect.data
    let drawer=headerSelect.drawer
    const { navigate } = this.props.property
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.detail}>
            <Text
              style={headerstatus?styles.leftmenu:styles.rightmenu}
              onPress={() => this.setHeaderStatue(navigate,'left')}
            >
              我的日程
            </Text>
            <Text
              style={!headerstatus?styles.leftmenu:styles.rightmenu}
              onPress={() => this.setHeaderStatue(navigate,'right')}
            >
              下属日程
            </Text>
          </View>
          <Text onPress={() =>headerSelect.changeDrawer(headerSelect.drawer)} style={styles.actions}>
            筛选
          </Text>
        </View>
        <View
          pointerEvents={'auto'}
          style={{
            display:drawer?'flex':"none",
            position: 'absolute',
            top: 36,
            left: 0,
            right: 0,
            botttom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
        >
          <ScrollView style={{ paddingVertical: getPixel(10), backgroundColor: 'white', height: '100%' }}>
            {toJS(data).map((item1, index) => {
              return (
                <View key={index}>
                  <View>
                    <Text style={styles.title}>{item1.title}</Text>
                  </View>
                  <View style={styles.list}>
                    {item1.list.map((info, index1) => {
                      return (
                        <Text
                          key={index1}
                          onPress={() =>
                            headerSelect.changeStatus(index, index1)
                          }
                          style={info.select?styles.select:styles.item}
                        >
                          {info.item}
                        </Text>
                      )
                    })}
                  </View>
                </View>
              )
            })}
            <View>
              <View><Text style={styles.title}>关键词搜索</Text></View>
              <View style={styles.search}>
                <TextInput style={styles.searchInput} placeholder={'请输入日程关键词'}></TextInput>
                <Image source={searchicon}></Image>
              </View>
            </View>
            <View style={{ marginTop: getPixel(10) }}>
              <View><Text style={styles.title}>参与人员</Text></View>
              <View style={styles.add}>
                <View style={{ position: 'relative' }}>
                  <Image style={styles.addImage} source={{ uri: 'http://img.anska.info/avator.jpg' }}></Image>
                  <Image source={del} style={styles.del}></Image>
                </View>
                <View style={{ position: 'relative' }}>
                  <Image style={styles.addImage} source={{ uri: 'http://img.anska.info/avator.jpg' }}></Image>
                  <Image source={del} style={styles.del}></Image>
                </View>
                <View style={{ position: 'relative' }}>
                  <Image style={styles.addImage} source={{ uri: 'http://img.anska.info/avator.jpg' }}></Image>
                  <Image source={del} style={styles.del}></Image>
                </View>
                <View style={{ position: 'relative' }}>
                  <Image style={styles.addImage} source={{ uri: 'http://img.anska.info/avator.jpg' }}></Image>
                  <Image source={del} style={styles.del}></Image>
                </View>
                <View style={{ position: 'relative' }}>
                  <Image style={styles.addImage} source={add_member}></Image>
                  <Image source={del} style={styles.del}></Image>
                </View>
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <Button style={styles.reset}  >重置</Button>
              <Button type="primary" style={styles.submit}>确定</Button>
            </View>
          </ScrollView>
          <View style={{ height: 1000 }}></View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: getPixel(375)
  },
  detail: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  leftmenu: {
    backgroundColor: '#5788FF',
    color: 'white',
    height: 26,
    lineHeight: 26,
    paddingLeft: getPixel(8),
    paddingRight: getPixel(1),
  },
  rightmenu: {
    height: 26,
    lineHeight: 26,
    borderColor: '#5788FF',
    borderWidth: 1,
    paddingLeft: getPixel(1),
    paddingRight: getPixel(8),
    color: '#5788FF',
  },
  actions: {
    width: '10%',
    textAlign: 'left',
    color: '#5788FF',
    height: 26,
    lineHeight: 26,
    justifyContent: 'flex-end'
  },
  title: {
    fontWeight: '800',
    fontSize: getPixel(15),
    height: getPixel(20),
    lineHeight: getPixel(20),
    paddingLeft: getPixel(10)
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  item: {
    marginVertical: getPixel(10),
    marginLeft: getPixel(10),
    textAlign: 'center',
    width: '30%',
    fontSize:getPixel(14),
    borderRadius: getPixel(4),
    lineHeight: getPixel(40),
    height: getPixel(40),
    borderColor: '#eee',
    borderWidth: getPixel(1)
  },
  select:{
    marginVertical: getPixel(10),
    marginLeft: getPixel(10),
    textAlign: 'center',
    width: '30%',
    fontSize:getPixel(14),
    borderRadius: getPixel(4),
    lineHeight: getPixel(40),
    height: getPixel(40),
    borderColor:'#5788FF',
    color:'#5788FF',
    borderWidth: getPixel(1)
  },
  search: {
    flexDirection: 'row',
    marginLeft: getPixel(10),
    marginTop: getPixel(10),
    alignItems: 'center',
    borderColor: "#e7e7e7",
    borderWidth: 2,
    width: getPixel(355),
    height: 40,
    lineHeight: 40,
    borderRadius: getPixel(4)
  },
  searchInput: {
    height: 30,
    lineHeight: 30,
    width: getPixel(315),
    fontSize: 14,
    paddingLeft: getPixel(10),
  },
  add: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getPixel(10)
  },
  addImage: {
    marginHorizontal: getPixel(15),
    width: getPixel(40),
    height: getPixel(40),
    borderRadius: 20
  },
  del: {
    position: 'absolute',
    top: 0,
    right: getPixel(10)
  },
  buttonGroup: {
    marginTop: getPixel(30),
    width: getPixel(335),
    flexDirection: "row",
    justifyContent: 'space-around',
    marginLeft: getPixel(10),
    paddingTop: getPixel(10),
    paddingBottom:getPixel(10),
  },
  reset: {
    width: getPixel(140),
    height: 40,
    borderWidth: getPixel(2),
    borderRadius: getPixel(18),
    backgroundColor: '#FBFBFB',
    borderColor: "#cccccc",
  },
  submit: {
    backgroundColor: "#5788FF",
    width: getPixel(140),
    height: 40,
    borderWidth: getPixel(2),
    borderRadius: getPixel(18),
  }
})
