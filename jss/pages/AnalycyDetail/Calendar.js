import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {getPixel} from '../../common/util'

export default class CalendarPage extends Component {
    static navigationOptions={
        header:null,
    }
    handleClose=()=>{
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginVertical:getPixel(10)}}><TouchableOpacity activeOpacity={0.1} onPress={this.handleClose}><Text style={{color:'#5788ff',fontWeight:'100',fontSize:16,marginLeft:getPixel(5)}}>关闭</Text></TouchableOpacity><Text style={{color:'#333333',fontSize:16,fontWeight:'bold',marginLeft:getPixel(100)}}>选择时间范围</Text></View>
                <Calendar
                    // Initially visible month. Default = Date()
                    current={'2012-03-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2012-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={true}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => (<Arrow/>)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    // Disable left arrow. Default = false
                    disableArrowLeft={true}
                    // Disable right arrow. Default = false
                    disableArrowRight={true}
                />
            </View>
        )
    }
}