import React,{Component} from 'react';
import {StyleSheet,View,Text,Animated,Easing} from 'react-native';
import SideBar from './SideBar';

class SelectData extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDrawerVisible: false,                      // 抽屉是否可见
            drawerWidth: new Animated.Value(0),          // 抽屉初始宽度
            };
    }
    openDrawer=()=>{
        Animated.timing(this.state.drawerWidth,{
            toValue: 1,
            duration:500,
            easing:Easing.linear
        }).start(()=>{this.setState({isDrawerVisible:true})});
    }
    closeDrawer=()=>{
        Animated.timing(this.state.drawerWidth,{
            toValue:0,
            duration: 500,
            easing:Easing.linear
        }).start(()=>{
            this.setState({isDrawerVisible:false})
        })
    }
    render(){
        const drawerWidth = this.state.drawerWidth.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 300],
          });
        return (
            <View>
            <Animated.View style={[styles.drawerStyle,{width:drawerWidth}]}>
            <SideBar />
            </Animated.View> 
            </View>                   
        )
    }
}
const styles=StyleSheet.create({
    drawerStyle: {
        position:'absolute',
        right:0,
        top:0,
        bottom:0,
        backgroundColor:'rgba(0,0,0,0.3)'        
    }
})
export default SelectData;