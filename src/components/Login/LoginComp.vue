<template>
    <div class="center">
        <div class="cover">
            <div class="row">
                <div><h2 class="title">Login</h2></div>
                <div class="circle svg-circle">
                    <img class="svg-circle" src="@/assets/Login/circle1.svg" />
                </div>
            </div>
            <div class="row">
                <div class="form">
                    <div class="input">
                        <div v-if="iconUser" class="icon">
                            <font-awesome-icon icon="user" />
                        </div>
                        <input v-model="username"  @focus="hideUser" @blur="hideUser" type="text" placeholder="ENTER E-MAIL" v-uppercase />
                    </div>
                    <div class="input">
                         <div v-if="iconPass" class="icon">
                            <font-awesome-icon icon="lock" />
                        </div>
                        <input v-model="pass" @keydown.enter="logged"  @focus="hidePass" @blur="hidePass" type="password" placeholder="ENTER PASSWORD" />
                    </div>
                </div>
                <div class="options">
                    <div class="hrow">
                        <div>
                            <input type="checkbox" id="rem" />
                            <label for="rem">Remember Me</label>
                        </div>
                        <div>
                            <button @click="logged" >Login</button>
                        </div>
                    </div>
                    <div class="hrow">
                        <button @click="$router.push('Forgot')">Forgot Password</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="logo-footer">
                    <img class="svg-circle" src="@/assets/Login/circle2.svg" />
                </div>
                <div class="title-footer">
                    <img id="logoSP" width="180" height="200" src="@/assets/spartan_logo.svg" />
                    <h2>Spartan Pro V8</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import * as ic from './js/icons.js'

export default {
  name: 'LoginComp',
  data () {
    return {
      iconUser: true,
      iconPass: true,
      username: '',
      pass: ''
    }
  },
  methods: {
    ...mapActions(['authUser']),
    hideUser (event) {
      this.iconUser = ic.needed(event)
    },
    hidePass (event) {
      this.iconPass = ic.needed(event)
    },
    logged () {
      this.authUser({
        data: {
          json: {
            username: this.username.toUpperCase(),
            password: btoa(this.pass)
          }
        }
      }).then(success => {
        if (success) {
          this.$router.push('/Home/Dashboard')
        }
      })
    }
  }
}
</script>
<style scoped>
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .cover{
        display: grid;
        box-shadow: 1px 5px 10px 5px #888888;
        background: white;
        height: 87%;
        width: 28%;
        grid-template-rows: 24% auto auto;
    }
    .title{
        color: #3A3A3A;
        margin-top: 50px;
        margin-left: 22px;
        font-size: 35px;
    }
    .row:first-child{
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .row:nth-child(2){
        height: 355px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .circle{
        margin-left: auto;
        margin-right: -80px;
    }

     .circle  img{
        clip-path: inset(0px 80px 0px 0px);
    }

    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: white;
        width: 74%;
        height: 100%;
        box-shadow: 1px 5px 10px 5px #888888;
    }
    .input{
        padding: 14px;
    }
    input:not([type="checkbox"]){
        width: 240px;
        height: 28px;
    }
     input:not([type="checkbox"])::placeholder{
        color:  #636363;
        font-weight: bold;
        text-align: center;
    }
    .icon{
        position: absolute;
        margin-top:6px;
        margin-left: 10px;
        font-size: 20px;
        font-weight: bold;
    }
    .options{
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        width: 100%;
        height: 80px;
    }
    label{
        color: #3A3A3A;
    }
    [type="checkbox"]:not(:checked) + label,
    [type="checkbox"]:checked + label {
        position: relative;
        padding-left: 0.3em;
        font-size: 1.05em;
        line-height: 1.7;
        cursor: pointer;
    }
    button{
        border: none;
        border-radius: 15px;
        background: #05173F;
        color: white;
        width: 160px;
        height: 32px;
        font-weight: bold;
    }

    button:hover{
        cursor: pointer;
        background: #07225c;
        color: rgb(223, 223, 223);
        border: 2px solid #07225c;
    }
    .hrow:first-child{
        display: flex;
        flex-direction: row;
    }
    .hrow:first-child > div:last-child{
        margin-left: auto;
        margin-right: -20px;
    }
    .hrow:last-child{
        margin-left: -20px;
    }

    .hrow:last-child button{
         clip-path: inset(0px 0px 0px 20px);
    }

    .hrow:first-child div:last-child  button{
        clip-path: inset(0px 20px 0px 0px);
    }

    .row:last-child{
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .logo-footer{
        display: flex;
        align-items: flex-end;
        height: 100%;
    }

    .logo-footer img{
        margin-left: -80px;
        clip-path: inset(0px 0px 0px 80px);
    }

    .title-footer{
        text-align: center;
    }

  .svg-circle{
     animation: popIn 0.4s ease-in;
  }
  #logoSP{
       animation: flyInLogo 0.2s linear;
  }
@keyframes popIn {
    0% {
    transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
  @keyframes flyInLogo {
    0%   {
    transform: translateX(100%);
    }
    25%{
      transform: translateX(75%);
    }
    50%{
      transform: translateX(50%);
    }
    75%{
      transform: translateX(25%);
    }
    100% {
    transform: translateX(0%);
    }
   }
</style>
