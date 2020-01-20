import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import { getPixel } from './../../common/utils'
import { DatePicker, List, Provider, Picker, Switch } from '@ant-design/react-native';
import { list,lenvel,task,taskstatus,remember} from "./resourceIcon";

export default class AddSchedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: undefined,
            value1: undefined,
            value2: '',
            value3: '',
            value4: undefined,
            checked: true,
            value5:undefined
        }
        this.onChange = value => {
            this.setState({ value });
        };
        this.onChangelevenl = value2 => {
            this.setState({ value2 });
        };
        this.onChangetask = value3 => {
            this.setState({ value3 });
        };
        this.onChangetaskstatus = value4 => {
            this.setState({ value4 });
        };
        this.onSwitchChange = value => {
            this.setState({
                checked: value,
            });
        };
        this.onChangerember = value5 => {
            this.setState({
                value5: value5,
            });
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Text style={{ fontSize: getPixel(18) }}> 新增日程</Text>,
            headerLeft: <Text style={styles.itemLeft}>取消</Text>,
            headerRight: <Text style={styles.itemRight}>保存</Text>
        }
    }
    render() {
        return (
            <Provider >
                <View style={{
                    paddingHorizontal: getPixel(10), backgroundColor: 'white', marginTop: 20,
                    marginBottom: 26
                }}>
                    <TextInput style={styles.title} placeholder=" 请输入日程标题"></TextInput>
                </View>
                <View>
                    <View>
                        <List>
                            <DatePicker
                                value={this.state.value}
                                mode="date"
                                defaultDate={'请选择'}
                                minDate={new Date(2015, 7, 6)}
                                maxDate={new Date(2026, 11, 3)}
                                onChange={this.onChange}
                                format="YYYY-MM-DD"
                            >
                                <List.Item arrow="horizontal"> 开始时间</List.Item>
                            </DatePicker>
                        </List>
                    </View>
                    <View>
                        <List>
                            <DatePicker
                                value={this.state.value1}
                                mode="date"
                                defaultDate={'请选择'}
                                minDate={new Date(2015, 7, 6)}
                                maxDate={new Date(2026, 11, 3)}
                                onChange={this.onChange}
                                format="YYYY-MM-DD"
                            >
                                <List.Item arrow="horizontal">结束时间</List.Item>
                            </DatePicker>
                        </List>
                    </View>
                    <View>
                        <Picker
                            data={lenvel}
                            cols={1}
                            value={this.state.value2}
                            onChange={this.onChangelevenl}
                        >
                            <List.Item arrow="horizontal">
                                紧要程度
                            </List.Item>
                        </Picker>
                    </View>
                    <View>
                        <Picker
                            data={task}
                            cols={1}
                            value={this.state.value3}
                            onChange={this.onChangetask}
                        >
                            <List.Item arrow="horizontal">
                                关连业务
                            </List.Item>
                        </Picker>
                    </View>
                    <View style={styles.textArea}>
                        <Text style={{ fontSize: getPixel(16) }}>日程描述</Text>
                        <TextInput placeholder={"请输入描述信息"} style={styles.TextInputm} multiline={true}></TextInput>
                    </View>
                    <View>
                        <Picker
                            data={taskstatus}
                            cols={1}
                            value={this.state.value4}
                            onChange={this.onChangetaskstatus}
                        >
                            <List.Item arrow="horizontal">
                                日程状态
                            </List.Item>
                        </Picker>
                    </View>
                    <View>
                        <List.Item extra={<Switch checked={this.state.checked}
                            onChange={this.onSwitchChange} />}>过期自动结束</List.Item>
                    </View>
                    <View style={{borderBottomColor:'#eee',borderBottomWidth:1 ,backgroundColor: 'white', flexDirection: 'row',alignItems:'center',justifyContent:"space-between" }}>
                        <Text style={{ fontSize: getPixel(16),  padding: getPixel(13) }}>日程标记</Text>
                        <View style={styles.colorSelect}>
                            {
                                list.map((info, index) => {
                                    return (
                                        <Image key={index} style={styles.imagePading} source={info.select ? info.item : info.item1} />
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <Picker
                            data={remember}
                            cols={1}
                            value={this.state.value5}
                            onChange={this.onChangerember}
                        >
                            <List.Item arrow="horizontal">
                                日程提醒
                            </List.Item>
                        </Picker>
                    </View>
                </View>
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
    itemLeft: {
        fontSize: getPixel(16),
        color: '#5788FF',
        marginLeft: getPixel(10)
    },
    itemRight: {
        fontSize: getPixel(16),
        color: '#5788FF',
        marginRight: getPixel(10)
    },
    title: {
        height: 40,
        fontSize: getPixel(16),
        lineHeight: 40
    },
    textArea: {
        backgroundColor: 'white',
        paddingLeft: getPixel(10),
        paddingTop: getPixel(10),
        paddingRight: getPixel(10)
    },
    TextInputm: {
        paddingTop: getPixel(10),
        fontSize: getPixel(14),
        height: 100,
    },
    colorSelect: {
        flexDirection: 'row',
        paddingRight:getPixel(10),

    },
    imagePading:{
        marginHorizontal:getPixel(4)
    }
})