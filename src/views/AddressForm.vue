<template>
  <div class="center">
   <navigation-bar @navigationChange="changeComp" />
    <form class="grid shadow">
      <profile-pic width="70" full="true" height="70" class="profile" />
      <div class="title">202018265</div>
      <transition name="fade">
        <customer-info v-if="show" />
      </transition>
      <div class="footer">
        <mutli-actions />
        <next-action />
      </div>
    </form>
  </div>
</template>

<script>

import ProfilePic from '@/components/UI/ProfilePic'
import MutliActions from '@/components/UI/Ticket/MutliActions.vue'
import NextAction from '@/components/UI/Ticket/NextAction.vue'
import CustomerInfo from '@/components/UI/Ticket/CustomerInfo'
import NavigationBar from '@/components/UI/Ticket/NavigationBar.vue'

export default {
  components: { ProfilePic, MutliActions, NextAction, CustomerInfo, NavigationBar },
  name: 'AddressForm',
  data () {
    return {
      nav: {
        one: { show: true },
        two: { show: false }
      }
    }
  },
  methods: {
    changeComp (arg) {
      this.show = arg
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 91%;
}
form{
  width: 80%;
  height: 60%;
  background: #fff;
  text-align: center;
  border-radius: 10px;
}
.shadow{
    box-shadow: 2px 5px 10px #888888;
}
.title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #FF1818;
  margin-top: 20px;
}
.profile {
  position: absolute;
  margin-left: -10px;
  margin-top: -35px;
}
.grid{
  display: flex;
  flex-direction: column;
}

.footer{
  display: grid;
  grid-template-columns: auto auto;
  height: 120px;
}

</style>
