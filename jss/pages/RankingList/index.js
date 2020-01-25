import React,{Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import TitleComponent from './TitleComponent';
import {observer } from 'mobx-react';
import appState from '../../store/dashboard'
import {getPixel} from '../../common/util';
import SortDepartment from './SortDepartment';
import SortPerson from './SortPerson';
import Header from './Header';
import {Drawer,Provider} from '@ant-design/react-native';
import RankingDrawer from './RankingDrawer';
@observer
class RankingList extends Component {
    static navigationOptions={
        header:null
    }
    goback=()=>{
        this.props.navigation.goBack();
    }
    openDrawer=()=>{
        appState.openRankingListDrawer();
    }
    componentDidMount(){
        appState.fetchRankingListData('https://facebook.github.io/react-native/movies.json')        
    }
    renderContent=()=>{
        const {selectedIndex}=appState;
        if(selectedIndex==0){
            return <SortPerson />
        } else if(selectedIndex==1){
            return <SortDepartment />
        }
    }
    render(){
        return (
            <Provider>
                <Drawer
             sidebar={<RankingDrawer closeDrawer={appState.closeRankingListDrawer} />}
             open={false}
             position="right"
             drawerWidth={300}
             drawerRef={appState.setRankingListDrawer}
             drawerBackgroundColor="rgb(0,0,0,.5)"
             >
              <Header goback={this.goback} openDrawer={appState.openRankingListDrawer}/>                
                {this.renderContent()}                                   
            </Drawer>
            </Provider>
        )
    }
}
export default RankingList;