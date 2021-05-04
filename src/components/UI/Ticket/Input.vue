<template>
  <div>
    <label class="control-label" :class="{errorText: light}" v-bind:for="name">{{title}}</label>
    <input :class="{error: light}" @error="error" @good="good" :required="required" v-on:blur="onCheck" :defaultValue="def"  :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"  :tabindex="index" :type="type" :placeholder="placeholder" v-bind:name="name" v-bind:id="name" />
  </div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    required: Boolean,
    modelValue: String,
    def: String,
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
