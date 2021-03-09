<template>
  <div>
    <label v-bind:for="name">{{title}}</label>
    <input ref="itel" :tabindex="index" :type="type" v-bind:placeholder="placeholder" v-bind:name="name" v-bind:id="name" />
  </div>
</template>

<script>
import IMask from 'imask'
import { ref, onMounted } from 'vue'
export default {
  name: 'InputMask',
  props: {
    name: String,
    index: Number,
    type: {
      type: String,
      default: 'text'
    },
    title: String,
    placeholder: String
  },
  setup () {
    const itel = ref(null)
    let mask = ref(null)
    onMounted(() => {
      mask = new IMask(itel.value, { mask: '(000) 000-0000' })
    })
    return { itel, mask }
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
