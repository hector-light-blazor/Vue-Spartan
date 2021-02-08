<template>
    <login-comp />
</template>
<script>

import { mapActions } from 'vuex'
import LoginComp from '@/components/Login/LoginComp.vue'

export default {
  components: {
    LoginComp
  },
  async mounted () {
    const response = await this.checkAuth()
    if (response) { this.$router.push('/Home/Dashboard') }
  },
  methods: mapActions(['checkAuth'])
}

</script>
