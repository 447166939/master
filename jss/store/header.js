import { observable, action, computed, autorun, ObservableMap } from 'mobx'
class header {
  @observable drawer=false;
  @observable headerstatus=1;
  @observable data = [
    {
      title: '日程状态',
      list: [
        { select: 1, item: '全部分类' },
        { select: 0, item: '进行中' },
        { select: 0, item: '未开始' },
        { select: 0, item: '已完成' },
        { select: 0, item: '未完成' },
        { select: 0, item: '已超时' },
        { select: 0, item: '已取消' }
      ]
    },
    {
      title: '紧要程度',
      list: [
        { select: 1, item: '全部分类' },
        { select: 0, item: '重要' },
        { select: 0, item: '紧要' },
        { select: 0, item: '普通' },
        { select: 0, item: '重要且紧急' }
      ]
    }
  ]
  @action 
  changeDrawer(satus){
    this.drawer=!satus
  }
  @action
  changeStatus(idx1, idx2) {
    console.log(idx1, idx2)
    let data=this.data;
    let datatransfer=data[idx1].list;
      datatransfer.map((item,index)=>{
      if(index==idx2){
        item.select=1
      }
      else{
        item.select=0;
      }
    })
    this.data[idx1].list=datatransfer
  }
  @action
  changeHeaderStyle(status){
    this.headerstatus=status
  }
}
const headerSelect = new header()
export default headerSelect
