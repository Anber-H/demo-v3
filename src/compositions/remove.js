import {reactive} from 'vue';

function userDelete() {
  const state2 = reactive({
    tableList: [
      {
        name: 'anber',
        password: '123456'
      }
    ]
  })
  const deleteList = (i) => {
      state2.tableList = state2.tableList.filter((item,index)=>{
      return index != i
    })
  }
  return { state2, deleteList }
}

export { userDelete }