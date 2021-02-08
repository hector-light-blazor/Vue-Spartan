<script>
import * as ic from './js/icons.js'
export default {
  name: 'ForgotComp',
  data () {
    return {
      iconUser: true,
      iconToken: false
    }
  },
  methods: {
    hideUser (event) {
      this.iconUser = ic.needed(event)
    },
    hideToken (event) {
      this.iconToken = ic.needed(event)
    }
  }
}
</script>

<template>
    <div class="center">
        <div class="cover">
            <div class="row">
                <div class="header"><button @click="$router.push('/')" class="clip-left">GO BACK</button>
                <h2 class="title">Forgot</h2></div>
                <div class="circle">
                    <img class="svg-circle" src="@/assets/Login/circle1.svg" />
                </div>
            </div>
            <div class="row">
                <div class="form">
                    <ul>
                        <li>Please enter below a valid e-mail address.</li>
                        <li>You will recieve a token in order to reset password.</li>
                    </ul>
                    <div class="input">
                        <div v-if="iconUser" class="icon">
                            <font-awesome-icon icon="user" />
                        </div>
                        <input @blur="hideUser" @focus="hideUser" type="email" placeholder="ENTER E-EMAIL" />
                    </div>
                    <div class="input">
                        <div v-if="iconToken" class="icon">
                            <font-awesome-icon icon="lock" />
                        </div>
                        <input @blur="hideToken" @focus="hideToken" type="password" placeholder="ENTER TOKEN" />
                    </div>
                </div>
                <div class="options">
                    <div class="hrow">
                        <button @click="$router.push('Forgot')">GENERATE TOKEN</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="logo-footer">
                    <img class="svg-circle" src="@/assets/Login/circle2.svg" />
                </div>
                <div class="title-footer">
                    <img width="180" height="200" src="@/assets/spartan_logo.svg" />
                    <h2>Spartan Pro V8</h2>
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
        display: grid;
        box-shadow: 1px 5px 10px 5px #888888;
        background: white;
        height: clamp(850px, 500px, 950px);
        width: clamp(500px, 450px, 500px);
        grid-template-rows: 24% auto auto;
    }
    .title{
        color: #3A3A3A;
        margin-top: 12px;
        margin-left: 22px;
        font-size: 35px;
    }
    .header button {
        margin-top: 20px;
        margin-left: -20px;
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

    ul{
        padding: 14px;
        list-style: none;
        font-weight: bold;

    }
    ul li{
        margin-bottom: 10px;
    }

    .input{
        padding: 14px;
    }
    input{
        width: 240px;
        height: 28px;
    }
    input::placeholder{
        color: #636363;
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
        text-align: center;
    }
    label{
        color: #3A3A3A;
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
    .clip-left{
        clip-path: inset(0px 0px 0px 20px);
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
    animation: popIn 0.5s ease-in;
  }
    @keyframes popIn {
    0% {
        transform: scale(0);
    }
    100% {
    transform: scale(1);
    }
}

</style>
