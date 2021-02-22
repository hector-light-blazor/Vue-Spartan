<template>
   <div @click="logOut" class="top">
      <font-awesome-icon icon="power-off" />
      <span>LOG OUT</span>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FooterComp',
  computed: { ...mapGetters(['socket', 'USER_ID']) },
  methods: {
    logOut () {
      this.socket.emit('spartan:leaving', this.USER_ID)
      localStorage.removeItem('user_id')
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .top{
   margin-top: auto;
   text-align: center;
   color: white;
   padding: 10px;
   font-size: x-large;
   margin-bottom: 8px;
 }
 .top span {
     margin-left: 20px;
 }
 .top:hover{
     cursor: pointer;
     color: rgb(196, 28, 28);
 }
</style>
