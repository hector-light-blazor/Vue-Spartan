<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
<script>
import Socketio from 'socket.io-client'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: { ...mapGetters(['socket', 'listOfUsers', 'USER_ID']) },
  methods: {
    ...mapActions(['updateSocket', 'saveID']),
    leaving () {
      this.socket.emit('spartan:leaving', this.USER_ID)
    }
  },
  created () {
    window.addEventListener('beforeunload', this.leaving)
    this.updateSocket(new Socketio('http://localhost:3000'))
    this.socket.on('server:msg:myid', (response) => {
      this.saveID(response?.id)
    })
    this.socket.on('server:msg:online', (user) => {
      this.$store.commit('UPDATE_ONLINE', { user_id: user.user_id, online: 1 })
      this.socket.emit('client:single:online', { client: user.socketid, spartan: this.USER_ID })
    })
    this.socket.on('server:single:online', (userID) => {
      this.$store.commit('UPDATE_ONLINE', { user_id: userID, online: 1 })
    })
    this.socket.on('server:user:left', (userID) => {
      this.$store.commit('UPDATE_ONLINE', { user_id: userID, online: 0 })
    })
  }
}
</script>
