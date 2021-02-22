<template>
  <div class="center">
    <form class="grid shadow">
      <profile width="100" full="true" height="100" class="profile" />
      <div class="title">202018265</div>
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
      <div class="footer">
        <mutli-actions />
         <button type="button">Next</button>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '@/components/UI/Ticket/Input'
import InputMask from '@/components/UI/Ticket/InputMask'
import Profile from '@/components/UI/Profile'
import MutliActions from '@/components/UI/Ticket/MutliActions.vue'

export default {
  components: { Profile, Input, InputMask, MutliActions },
  name: 'AddressForm'
}
</script>

<style scoped>
.center{
  display: flex;
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
  margin-left: -50px;
  margin-top: -50px;
}
.grid{
  display: flex;
  flex-direction: column;
}
.column{
  display: grid;
  grid-template-columns: auto auto;
  margin-top: 14px;
  padding: 10px;
  height: 100%;
}
.footer{
  display: grid;
  grid-template-columns: auto auto;
  height: 120px;
  border: 1px solid goldenrod;
}
</style>
