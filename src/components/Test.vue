<template>
  <div>
    <ul>
      <li>
        <a href="javascript:void" @click="jump('beforeCreate')">beforeCreate</a>
      </li>
      <li>
        <a href="javascript:void" @click="jump('created')">created</a>
      </li>
      <li>
        <a href="javascript:void" @click="jump('beforeMount')">beforeMount</a>
      </li>
      <li>
        <a href="javascript:void" @click="jump('mounted')">mounted</a>
      </li>
      <li>
        <a href="javascript:void" @click="jump('beforeUpdate')">beforeUpdate and updated</a>
      </li>
      <li>
        <a href="javascript:void" @click="jump('beforeDestroy')">beforeDestroy and destroyed</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods:{
    jump(router){
      this.$router.push(router);
    }
  }
}
</script>
