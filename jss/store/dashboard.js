import { observable, action, computed, autorun, ObservableMap } from 'mobx'
import achieveData from '../data/achievementDetail.json';
import dashboardData from '../data/dashboard';
import rankingListData from '../data/rankingList'
import selectData from '../data/selectData.json'
import selectDepartmentData from '../data/selectDepartment.json'
import analycyDetailData from '../data/analycyDetail.json'
class AppState {
  @observable selectedIndex=0;
  @observable drawer=null;
  @observable analycyDrawer=null;
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

@observable rankingListData =
  {
    sortPersonal: [
      {
        "order": '',
        "name": '',
        "department": null,
        "target": null,
        "amount": null,
        "completeRate": null,
        "amountRate": null
      }
    ],
    sortDepartment: [
      {"order":null,"department":null,"target":null,"amount":null,"completeRate":null,"amountRate":null},
    ]
  }

  @observable selectData={
    leixingBtnList: [
      {title:''}
    ],
    shijianBtnList: [
      {title:''}
    ],
    member: [
      {name:''}
    ]
  }

  @observable selectDepartmentData={
    treeData: [{id:'',name:'',parentId:'',children:[]}]
  }

  @observable analycyDetailData= {
    data: [
      {
        level: '',
        chanceNo: null,
        inversionRate:'',
        saleMoney: null,
        probability:null,
    }
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

@action
  fetchRankingListData = (url) => {
      fetch(url)
          .then((response) => response.json())
          .then((responseJson) => {
            this.rankingListData=rankingListData;
          }).catch(e=>{})  
}

@action
fetchSelectData = (url) => {
  fetch(url)
  .then((response) => response.json())
          .then((responseJson) => {
            this.selectData=selectData;
          }).catch(e=>{}) 
}


@action
fetchSelectDepartmentData = (url) => {
  fetch(url)
  .then((response) => response.json())
          .then((responseJson) => {
            this.selectDepartmentData=selectDepartmentData;
          }).catch(e=>{}) 
}

@action
fetchAnalycyDetailData = (url) => {
  fetch(url)
  .then((response) => response.json())
          .then((responseJson) => {
            this.analycyDetailData=analycyDetailData;
          }).catch(e=>{}) 
}

@action 
setDrawer = (el)=>{
  this.drawer=el
}
@action
openDrawer=()=>{
  this.drawer.openDrawer();
}
@action
closeDrawer=()=>{
  this.drawer.closeDrawer();
}

@action
setAnalycyDrawer=(el)=>{
  this.analycyDrawer=el;
}
@action
openAnalycyDrawer=()=>{
  this.analycyDrawer.openDrawer()
}
@action
closeAnalycyDrawer=()=>{
  this.analycyDrawer.closeDrawer();
}

@computed get members(){
  return this.selectData.member.slice(0,3)
}


  
}  
const appState = new AppState()
export default appState;
