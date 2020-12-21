<template>
   <div>
    <a-form>
      <a-form-item label="用户名">
        <a-input v-model:value="state.form.name" placeholder="用户名"/>
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-model:value="state.form.password" placeholder="密码"/>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="addMsg">
          添加
        </a-button>
        <a-button style="margin-left: 10px;" @click="restMsg">
          重置
        </a-button>
      </a-form-item>
    </a-form>
    <a-list item-layout="horizontal">
        <a-list-item v-for="(item, index) in state2.tableList" :key="index" style="display:block" @click="deleteList(index)">
          {{item.name}}--{{item.password}}
        </a-list-item>
    </a-list>
   </div>
</template>

<script>
import { Form,Input, Button, List } from 'ant-design-vue';
import {reactive} from 'vue';
import {userAdd} from '../compositions/add.js';
import {userDelete} from '../compositions/remove.js';
import {userReset} from '../compositions/reset.js';

export default {
  components: {
    AForm: Form,
    AInput: Input,
    AButton: Button,
    AList: List
  },
  setup() {
    let { state2, deleteList } = userDelete();
    let { state, addMsg } = userAdd(state2);
    let { restMsg } = userReset(state);
    
    return { state, state2, addMsg, deleteList, restMsg }
  }
};
</script>

<style>
</style>