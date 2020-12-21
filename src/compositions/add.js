import { reactive } from 'vue';

function userAdd(state2) {
  const state = reactive({
    form: {
      name: '',
      password: ''
    }
  })
  const addMsg = () => {
    if(state.form.name || state.form.password) {
      const list = Object.assign({}, state.form)
      state2.tableList.push(list);
      state.form.name = "";
      state.form.password = "";
    }
  }
  return { state, addMsg }
}
export {
  userAdd
};