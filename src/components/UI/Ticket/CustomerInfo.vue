<template>
  <div class="column">
      <div class="col">
            <Input index="1" title="First Name" placeholder="First Name" name="fname" />
            <input-mask index="3" title="Main Number:" placeholder="(000) 000-0000" name="tele" />
            <Input index="5" title="E-mail" placeholder="E-mail" name="email" type="email" />
          </div>
          <div class="col">
            <Input index="2" title="Last Name:" placeholder="Last name" name="lname" />
            <!-- <Input title="Second Number:" placeholder="Telephone" name="lname" /> -->
            <input-mask index="4" placeholder="(000) 000-0000" title="Second Number:" />
            <Input index="6" title="Alt. E-mail" placeholder="E-mail" name="altemail" />
        </div>
  </div>
</template>

<script>
import Input from '@/components/UI/Ticket/Input'
import InputMask from '@/components/UI/Ticket/InputMask'
export default {
  name: 'CustomerInfo',
  components: { Input, InputMask }
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
