<template>
  <div>
    <label :class="{errorText: light}" v-bind:for="name">{{title}}</label>
    <input :class="{error: light}" @error="error" @good="good" :required="required" v-on:blur="onCheck" :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" ref="itel" :tabindex="index" :type="type" v-bind:placeholder="placeholder" v-bind:name="name" v-bind:id="name" />
  </div>
</template>

<script>
import IMask from 'imask'
import { ref, onMounted } from 'vue'
export default {
  name: 'InputMask',
  props: {
    required: Boolean,
    modelValue: String,
    name: String,
    index: String,
    type: {
      type: String,
      default: 'text'
    },
    title: String,
    placeholder: String
  },
  data () {
    return {
      light: false
    }
  },
  setup () {
    const itel = ref(null)
    let mask = ref(null)
    onMounted(() => {
      mask = new IMask(itel.value, { mask: '(000) 000-0000' })
    })
    return { itel, mask }
  },
  methods: {
    onCheck () {
      if (this.required && this.modelValue.length === 0) {
        this.light = true
      } else {
        this.light = false
      }
    },
    error () {
      this.light = true
    },
    good () {
      this.light = false
    }
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
 .error{
   border: 1px solid red;
 }
 .errorText {
   color: red;
 }
</style>
