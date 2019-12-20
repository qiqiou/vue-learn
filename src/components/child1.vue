<template>
  <div style="background-color: #eeeeee;padding:5px 10px">
    <div>child1:</div>
    <div>
      {{child}}
    </div>
    <input type="text" v-model="child" style="border: 1px solid #aaaaaa"/>
  </div>
</template>
<script>
export default {
  props: {
    name: {
        type: [String,Number],
        default: 'qiqiou'
    }
  },
  data(){
    return {
      child: 999
    }
  },
    // 创建之前
  beforeCreate(){
    console.log('   child1 beforeCreate 即将创建');
  },
  // 创建完毕
  created(){
    console.log('   child1 created 创建完毕');
  },
  // 挂载前，#el挂载到我们指定的节点
  beforeMount(){
    console.log('   child1 beforeMount 即将挂载');
  },
  // 挂载完毕
  mounted(){
    console.log('   child1 mounted 挂载完毕');
  },
  beforeUpdate(){
    console.log('   child1 beforeUpdate 更新前');
  },
  updated(){
    console.log('   child1 updated 更新完毕');
  },
  beforeDestroy(){
    console.log('   child1 beforeDestroy 摧毁前');
  },
  destroyed(){
    console.log('   child1 destroyed 摧毁完毕');
  }
}
</script>
