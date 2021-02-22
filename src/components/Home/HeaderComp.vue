<template>
   <div class="head">
     <div class="left">
       <font-awesome-icon class="pico" @click="send" icon='bars' />
       <input type="text" placeholder="ENTER KEYWORDS" />
     </div>
     <div class="right">
        <div class="selection"><font-awesome-icon class="icon pico" icon="bell" /></div>
        <div class="selection"><font-awesome-icon class="icon pico" icon="envelope" /></div>
        <div class="title">
           <span class="name">{{fullName}}</span>
           <span class="position">{{workCenter}}</span>
        </div>
        <div class="selection">
          <profile />
          <!-- "https://www.thefamouspeople.com/profiles/thumbs/chadwick-boseman-1.jpg" /> -->
        </div>
     </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Profile from '../UI/Profile.vue'

export default {
  components: { Profile },
  name: 'HeaderComp',
  methods: {
    send () {
      this.$emit('close')
    }
  },
  computed: mapGetters(['fullName', 'workCenter'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .head{
   display: flex;
   flex-direction: row;
   background: white;
   width: 86vw;
   height: 90px;
 }
 .left{
   display: flex;
   align-items: center;
   padding-left: 20px;
   font-size:larger;
   height: 100%;
   width: 300px;
 }
 .right{
   display: flex;
   align-items: center;
   margin-left: auto;
   width: 380px;
 }
 .right > div{
   flex: 1 1 auto;
   text-align: center;
   margin: 8px;
 }
 .selection{
   display: flex;
   justify-content: center;
   justify-items: center;
   align-items: center;
   width: 48px;
   height: 80px;
   color: white !important;
 }
 .selection:hover{
    cursor: pointer;
    background: #f7f7f7d0;
 }
 input{
   margin-left: 20px;
   border-radius: 20px;
   border: 1px solid lavender;
   height: 35px;
   width: 270px;
   padding-left: 10px;
 }
 input:focus{
   outline: none;
 }
 input::placeholder{
   text-align: center;
   color: #8b8b8b;
   font-weight: bold;
   font-size: medium;
 }
 .pico{
   cursor: pointer;
 }
 .title{
   display: flex;
   flex-direction: column;
   text-align: center;
 }
 .name{
   color: #606060;
 }
 .position{
   color: #959595;
   font-size: 0.6rem;
   font-weight: bold;
 }
 .icon{
   font-size: x-large;
   color: #808080d0;
 }

</style>
