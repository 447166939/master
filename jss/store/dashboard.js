import { observable, action, computed, autorun, ObservableMap } from 'mobx'
import achieveData from '../data/achievementDetail.json';
import dashboardData from '../data/dashboard';

class AppState {
  @observable selectedIndex=0; 
  @observable achieveData= {"achievementData":[    
    {"date":null,"target":null,"achievement":null},      
],
"achievementList": [
    {"date":null,"target":null,"amount":null,"number":null,"percent":null,"average":null},
   
    
]};
  @observable dashboardData= {
    "visitInfo":{"numOfTarget":null,"numOfCompleted":null},
  "buyInfo":{"numOfTarget":null,"numOfCompleted":null},
  "info":{"numOfTarget":null,"numOfCompleted":null,"total":null},
  "funnelData":[
    {"value": null, "name": ""},
],
"achievementData": [
  {"date":"","quantity": null,"percent":null},
]
}
  
  @action
  handleIndexChange = (index) => {
    console.log('====',index);
    this.selectedIndex=index;
  }

  @action
  fetchAchieveData = (url) => {
      fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.achieveData=achieveData
          }).catch(e=>{})  
}
@action
  fetchDashboardData = (url) => {
      fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.dashboardData=dashboardData;
          }).catch(e=>{})  
}
  
}  
const appState = new AppState()
export default appState;
