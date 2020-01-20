import React,{Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import TitleComponent from './TitleComponent';
import {observer } from 'mobx-react';
import appState from '../../store/dashboard'
import {getPixel} from '../../common/util';
@observer
class RankingList extends Component {
    static navigationOptions = ({navigation}) => {
        
        return {
            headerLeft: <Image style={{ width: getPixel(10), height: getPixel(20), marginLeft: getPixel(10) }} source={require('../../static/back.png')}></Image>,
            headerRight: <View><Text style={{ fontSize: 16, color: '#5788ff', marginRight: getPixel(20) }}>筛选</Text></View>,
            headerTitle: <TitleComponent />,
            headerTitleStyle: { flex: 1, alignSelf: 'center', textAlign: 'center' },
        };
    }
    componentDidMount(){
        
    }
    render(){
        const {selectedIndex}=appState;
        return (
            <View>                
                <Text>{selectedIndex}</Text>              
            </View>
        )
    }
}
export default RankingList;
const styles=StyleSheet.create({
    container: {},
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