<template>
  <div class="column">
      <div class="col">
            <Input required v-model="fname" index="1" title="*First Name" placeholder="First Name" name="cfirst_name"   />
            <input-mask required v-model="tele" index="3" title="*Main Number:" placeholder="(000) 000-0000" name="alt_telephone" />
            <Input required v-model="email" index="5" title="*E-mail" placeholder="E-mail" name="email" type="cemail"  />
            <Input required v-model="letname" index="7" title="*Enter Address Letter Name" placeholder="Customer Name for Letter" name="letter_name" />
      </div>
      <div class="col">
            <Input required v-model="lname" index="2" title="*Last Name:" placeholder="Last name" name="clast_name" />
            <input-mask v-model="tele2" index="4" placeholder="(000) 000-0000" title="Second Number:" />
            <Input v-model="email2" index="6" title="Alt. E-mail" placeholder="E-mail" type="email" name="alt_cemail" />
      </div>
  </div>
</template>

<script>
import Input from '@/components/UI/Ticket/Input'
import InputMask from '@/components/UI/Ticket/InputMask'
export default {
  name: 'CustomerInfo',
  components: { Input, InputMask },
  computed: {
    fname: {
      get () {
        return this.$store.state.address.ticket.customer_info.cfirst_name?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setFNAME', value.toUpperCase())
      }
    },
    lname: {
      get () {
        return this.$store.state.address.ticket.customer_info.clast_name?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setLNAME', value.toUpperCase())
      }
    },
    tele: {
      get () {
        return this.$store.state.address.ticket.customer_info?.alt_telephone || ''
      },
      set (value) {
        this.$store.commit('setTELE', value)
      }
    },
    tele2: {
      get () {
        return this.$store.state.address.ticket.customer_info?.alt2_telephone || ''
      },
      set (value) {
        this.$store.commit('setSECTELE', value)
      }
    },
    email: {
      get () {
        return this.$store.state.address.ticket.customer_info?.cemail || ''
      },
      set (value) {
        this.$store.commit('setATEmail', value)
      }
    },
    email2: {
      get () {
        return this.$store.state.address.ticket.customer_info?.alt_cemail || ''
      },
      set (value) {
        this.$store.commit('setATSecEmail', value)
      }
    },
    letname: {
      get () {
        return this.$store.state.address.ticket.customer_info.letter_name?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setLetterName', value)
      }
    }
  }
}
</script>
<style scoped>
.column{
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 14px;
  padding: 10px;
  height: 100%;
}
</style>
