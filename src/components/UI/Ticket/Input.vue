<template>
  <div>
    <label v-bind:for="name">{{title}}</label>
    <input  :tabindex="index" :type="type" :placeholder="placeholder" v-bind:name="name" v-bind:id="name" />
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    name: String,
    index: Number,
    type: {
      type: String,
      default: 'text'
    },
    title: String,
    placeholder: String
  }
}
</script>
<style scoped>
 div{
     display: flex;
     flex-direction: column;
     padding: 16px;
 }
 label{
     margin-right: auto;
 }
 input{
     height: 28px;
 }
</style>
