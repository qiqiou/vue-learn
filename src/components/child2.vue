<template>
  <div>
    <div style="background-color: #aaaaaa;padding:5px 10px">
      <div>child2:</div>
      <div>
        {{child}}
      </div>
      <input type="text" v-model="child" style="border: 1px solid #aaaaaa"/>
    </div>
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
      child: 99
    }
  },
    // 创建之前
  beforeCreate(){
    console.log('   child2 beforeCreate 即将创建');
  },
  // 创建完毕
  created(){
    console.log('   child2 created 创建完毕');
  },
  // 挂载前，#el挂载到我们指定的节点
  beforeMount(){
    console.log('   child2 beforeMount 即将挂载');
  },
  // 挂载完毕
  mounted(){
    console.log('   child2 mounted 挂载完毕');
  },
  beforeUpdate(){
    console.log('   child2 beforeUpdate 更新前');
  },
  updated(){
    console.log('   child2 updated 更新完毕');
  },
  beforeDestroy(){
    console.log('   child2 beforeDestroy 摧毁前');
  },
  destroyed(){
    console.log('   child2 destroyed 摧毁完毕');
  }
}
</script>
