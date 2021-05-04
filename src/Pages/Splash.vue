<template>
  <div class="center">
    <div class="cover">
       <div class="inner">
          <div class="first">
              <div class="frow">
                  <div class="logo">
                    <img width="180" height="180"
                   src="../assets/spartan_logo.svg" />
                  </div>
                  <div class="title">
                      <h2>Spartan Pro</h2>
                  </div>
              </div>
              <div class="frw2">
                  <h2 class="version">V8</h2>
              </div>
          </div>
          <div class="second">
              <img class="psLogo" src="../assets/public_safety_logo.svg" />
          </div>
       </div>
    </div>
  </div>
</template>
<style scoped>
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .cover{
        background: #05173F;
        width: 80%;
        height: 80%;
        border-radius: 20px;
        padding: 22px;
    }
    .inner{
        background: #0D5F7D;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        box-shadow: #000000;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .first{
        display: flex;
        flex-direction: column;
    }
    .frow{
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .frw2{
        margin-top: auto;
        margin-left: 20px;
        line-height: 3px;
    }
    h2{
        color: white;
        font-size: xx-large;
        font-weight: bold;
    }
    .title{
        display: flex;
        justify-items: center;
        align-items: center;
        margin-left: 14px;
    }
    .title > h2{
        font-size: 45px;
    }
    .second{
        display: flex;
        background: url("../assets/Splash/police.svg") no-repeat  center;
        background-size: cover;
    }
    .psLogo{
        margin-top: auto;
        margin-left: auto;
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
        margin-right: 10px;
    }
</style>
<script>
import { mapActions } from 'vuex'

export default {
  methods: mapActions(['getUsers', 'checkAuth']),
  async mounted () {
    const isUsers = await this.getUsers()
    const isAuth = await this.checkAuth()
    console.log(`IS USER: ${isUsers}`)
    console.log(`Is Auth ${isAuth}`)

    setTimeout(() => {
      if (isUsers && isAuth) { this.$router.push('/Home/Dashboard') } else { this.$router.push('/Login') }
    }, 1000)
  }
}
</script>
