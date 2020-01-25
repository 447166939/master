import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import TreeSelect from 'react-native-tree-select';
import {observer} from 'mobx-react';
import appState from '../../store/dashboard'
import {getPixel} from '../../common/util';
@observer 
export default class SelectDepartment extends Component {
    static navigationOptions={
        header:null,
    }

     componentDidMount(){
        appState.fetchSelectDepartmentData('https://facebook.github.io/react-native/movies.json');
    }  
    _onClick=()=>{}
    _onClickLeaf=()=>{}
    goback=()=>{
                
        this.props.navigation.goBack();
    } 
    render(){
        const {treeData}=appState.selectDepartmentData
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.goback}><View><Text style={styles.closeTxt}>关闭</Text></View></TouchableOpacity><Text style={styles.title}>选择部门</Text>
                </View>
                <TreeSelect
                    data={treeData}
                    // isOpen
                    // openIds={['A01']}
                    // defaultSelectedId={['B062']}
                    isShowTreeId={false}
                    selectType="single"
                   // selectType="multiple"
                    itemStyle={{
                        // backgroudColor: '#8bb0ee',
                        fontSize: 12,
                        color: '#333333',
                        borderBottomWidth: getPixel(1),
                        borderColor:'#cccccc',
                    }}
                    selectedItemStyle={{
                        backgroudColor: '#ffffff',
                        fontSize: 16,
                    }}
                    onClick={this._onClick}
                    onClickLeaf={this._onClickLeaf}
                    treeNodeStyle={{
                        // openIcon: <Icon size={18} color="#171e99" style={{ marginRight: 10 }} name="ios-arrow-down" />,
                        // closeIcon: <Icon size={18} color="#171e99" style={{ marginRight: 10 }} name="ios-arrow-forward" />
                        openIcon: <Image
                            resizeMode="stretch"
                            style={{ width: getPixel(18), height: getPixel(18) }}
                            source={require('../../static/down.png')} />,
                        closeIcon: <Image
                            resizeMode="stretch"
                            style={{ width: getPixel(18), height: getPixel(18) }}
                            source={require('../../static/tree_right.png')} />
                    }}
                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: getPixel(10),
        backgroundColor:'#ffffff',
    },
    header: {
        height:getPixel(28),
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:getPixel(5),
    },
    closeTxt: {
        color:'#5788ff',
        fontSize:18,
        fontWeight:'100'
    },
    title: {
        marginLeft:getPixel(100),
        fontSize:18,
        fontWeight:'bold',
    }
})