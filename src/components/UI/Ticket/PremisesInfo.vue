<template>
    <div class="column">
           <div class="col">
              <Input v-model="fname" required index="1" title="*Owner First Name:"  name="pfirst_name" />
              <Input v-model="sub" required index="3" title="*Subdivision Name:"  name="subdivision" />
              <Input v-model="lot" def="0" required index="5" title="*Lot Number:"  name="lot_num" />
              <Input v-model="prop" index="7" title="Property ID:"  name="property_id" />
            </div>
            <div class="col">
              <Input v-model="lname" required index="2" title="*Owner Last Name:"  name="plast_name" />
              <Input v-model="block" index="4" title="*Block Number:"  name="block_num" />
              <Input v-model="tax" index="6" title="Tax Account:"  name="tax_account_num" />
          </div>
    </div>
  </template>

<script>
import Input from '@/components/UI/Ticket/Input'
export default {
  name: 'PremisesInfo',
  components: { Input },
  computed: {
    fname: {
      get () {
        return this.$store.state.address.ticket.premises_info.pfirst_name?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setOwnerFName', value.toUpperCase())
      }
    },
    lname: {
      get () {
        return this.$store.state.address.ticket.premises_info.plast_name?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setOwnerLName', value.toUpperCase())
      }
    },
    sub: {
      get () {
        return this.$store.state.address.ticket.premises_info.subdivision?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setSubName', value.toUpperCase())
      }
    },
    block: {
      get () {
        return this.$store.state.address.ticket.premises_info?.block_num || ''
      },
      set (value) {
        this.$store.commit('setBlock', value)
      }
    },
    lot: {
      get () {
        return this.$store.state.address.ticket.premises_info?.lot_num || ''
      },
      set (value) {
        this.$store.commit('setLot', value)
      }
    },
    tax: {
      get () {
        return this.$store.state.address.ticket.premises_info.tax_account_num?.toUpperCase() || ''
      },
      set (value) {
        this.$store.commit('setTaxAcc', value.toUpperCase())
      }
    },
    prop: {
      get () {
        return this.$store.state.address.ticket.premises_info.property_id?.toUpperCase() || ''
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
