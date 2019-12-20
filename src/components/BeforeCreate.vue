<template>
  <div>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      message: 'hello Vue!'
    }
  },
  // 创建之前
  beforeCreate(){
    console.log("%c%s", "color:#00965e",'beforeCreate 即将创建');
    console.log("%c%s", "color:red","el     : " + this.$el);
    console.log("%c%s", "color:red","method : " + this.getMessage)
    console.log("%c%s", "color:red","data   : " + JSON.stringify(this.$data));
  },
  methods: {
    getMessage() {
      return this.message;
    }
  }
}
</script>
