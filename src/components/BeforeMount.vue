<template>
  <div>
    {{message}}
    <child-one name="child1"></child-one>
    <child-two name="child2"></child-two>
  </div>
</template>

<script>
import childOne from './child1';
import childTwo from './child2';

export default {
  name: 'test',
  data () {
    return {
      message: 'hello Vue!'
    }
  },
  components: {
    childOne,
    childTwo
  },
  // 创建之前
  beforeCreate(){
    console.log('beforeCreate 即将创建');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log("%c%s", "color:red","method : " + this.getMessage)
    console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
  },
  // 创建完毕
  created(){
    console.log('created 创建完毕');
    console.log("%c%s", "color:red" , "el     : " + this.$el);
    console.log("%c%s", "color:red","method: " + this.getMessage)
    console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
  },
  // 挂载前，#el挂载到我们指定的节点
  beforeMount(){
    console.log("%c%s", "color:#00965e",'beforeMount 即将挂载');
    console.log("%c%s", "color:red" , "el     : " + this.$el);
    console.log("%c%s", "color:red","method: " + this.getMessage)
    console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
  },
  methods: {
    getMessage() {
      return this.message;
    }
  }
}
</script>
