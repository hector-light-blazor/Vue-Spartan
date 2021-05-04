<template>
  <div class="center">
   <navigation-bar @navigationChange="changeComp" />
    <form @submit.prevent name="ticket" class="grid shadow">
      <profile-pic v-bind:width="70" v-bind:full="true" v-bind:height="70" class="profile" />
      <div class="title">202018265</div>
      <span class="req">* Values Required</span>
      <transition name="fade">
        <customer-info v-if="nav.one.show" />
      </transition>
      <transition name="fade">
        <premises-info v-if="nav.two.show" />
      </transition>
      <div class="footer">
        <multi-actions />
        <next-action @nextChange="changeAuto" />
      </div>
    </form>
  </div>
</template>

<script>

import ProfilePic from '@/components/UI/ProfilePic'
import MultiActions from '@/components/UI/Ticket/MultiActions.vue'
import NextAction from '@/components/UI/Ticket/NextAction.vue'
import CustomerInfo from '@/components/UI/Ticket/CustomerInfo'
import NavigationBar from '@/components/UI/Ticket/NavigationBar.vue'
import PremisesInfo from '@/components/UI/Ticket/PremisesInfo.vue'
export default {
  components: { ProfilePic, MultiActions, NextAction, CustomerInfo, NavigationBar, PremisesInfo },
  name: 'AddressForm',
  data () {
    return {
      nav: {
        one: { show: true },
        two: { show: false },
        three: { show: false }
      },
      index: 'one'
    }
  },
  beforeUnmount () {
    console.log('this ran')
    this.$store.commit('resetState')
  },
  methods: {
    changeComp (name) {
      const response = this.checkForm()
      if (response) return
      const elem = document.getElementById('navi')
      var event = new Event('proceed')
      elem.dispatchEvent(event)
      for (const key in this.nav) {
        this.nav[key].show = false
      }
      this.nav[name].show = true
    },
    changeAuto () {
      let start = 0
      const location = ['one', 'two', 'three']
      const response = this.checkForm()
      if (response) return
      for (const key in this.nav) {
        if (this.nav[key].show) {
          this.nav[key].show = false
          break
        }
        start++
      }
      const ul = document.getElementById('navi')

      const next = (start === 2) ? 0 : start + 1
      const loc = location[next]
      this.nav[loc].show = true
      var event = new CustomEvent('handle', { detail: loc })
      ul.dispatchEvent(event)
    },
    checkForm () {
      const inputs = document.forms[0].querySelectorAll('input')
      let error = false
      for (const element of inputs) {
        if (element.required && !element.value) {
          var event = new Event('error')
          element.dispatchEvent(event)
          if (!error) error = true
        } else if (element.required) {
          event = new Event('good')
          element.dispatchEvent(event)
        }
      }

      return error
    },
    parse (value) {
      return parseInt(value)
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
  text-align: center;
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

.req{
  margin-left: 20px;
  color: red;
}

</style>
