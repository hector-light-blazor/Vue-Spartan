<template>
   <div class="container">
      <div class="menu shadow">
        <div class="row">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30.377" viewBox="0 0 36 30.377">
                 <path id="Icon_awesome-tasks" data-name="Icon awesome-tasks" d="M9.816,2.5a.844.844,0,0,0-1.2,0L4.144,6.948l-1.6-1.555a.844.844,0,0,0-1.2,0L.248,6.5a.844.844,0,0,0,0,1.2l3.346,3.333a.9.9,0,0,0,1.238,0l1.1-1.1,5.077-5.076a.85.85,0,0,0,.006-1.2Zm0,11.193a.844.844,0,0,0-1.2,0l-4.477,4.48-1.6-1.554a.844.844,0,0,0-1.2,0l-1.1,1.1a.844.844,0,0,0,0,1.2l3.338,3.34a.9.9,0,0,0,1.238,0l1.1-1.1L11,16.073a.844.844,0,0,0,.006-1.188ZM4.5,25.875a3.375,3.375,0,1,0,0,6.75,3.375,3.375,0,1,0,0-6.75ZM34.875,27H14.625A1.125,1.125,0,0,0,13.5,28.125v2.25A1.125,1.125,0,0,0,14.625,31.5h20.25A1.125,1.125,0,0,0,36,30.375v-2.25A1.125,1.125,0,0,0,34.875,27Zm0-22.5H14.625A1.125,1.125,0,0,0,13.5,5.625v2.25A1.125,1.125,0,0,0,14.625,9h20.25A1.125,1.125,0,0,0,36,7.875V5.625A1.125,1.125,0,0,0,34.875,4.5Zm0,11.25H14.625A1.125,1.125,0,0,0,13.5,16.875v2.25a1.125,1.125,0,0,0,1.125,1.125h20.25A1.125,1.125,0,0,0,36,19.125v-2.25A1.125,1.125,0,0,0,34.875,15.75Z" transform="translate(0 -2.248)"/>
                </svg>
            </div>
            <div class="title">
                <h3>Select a task!</h3>
            </div>
        </div>
        <div class="row">
            <div class="square">
                 <button @click="onSelect" v-bind:class="{active: btn.address.visible}" name="address" class="btn-circle shadow">
                    Address Request
                </button>
                <check-mark :selected="btn.address.visible" />
            </div>
            <div class="square">
                <button @click="onSelect" v-bind:class="{active: btn.subdivision.visible}" name="subdivision" class="btn-circle shadow">
                    Subdivision Request
                </button>
                <check-mark :selected="btn.subdivision.visible" />
            </div>
            <div class="square">
                <button @click="onSelect" v-bind:class="{active: btn.general.visible}" name="general" class="btn-circle shadow">General Task</button>
                <check-mark :selected="btn.general.visible" />
            </div>
        </div>
        <div class="row">
            <button @click="changeRoute" class="btn">Start</button>
        </div>

      </div>
   </div>
</template>
<script>
import CheckMark from '@/components/UI/CheckMark'
export default {
  components: { CheckMark },
  data: function () {
    return {
      btn: {
        address: { visible: false, route: 'AddressRequest' },
        subdivision: { visible: false, route: '' },
        general: { visible: false, route: '' }
      }
    }
  },
  methods: {
    onSelect (event) {
      const ele = event.target
      for (const key in this.btn) {
        this.btn[key].visible = false
      }
      this.btn[ele.name].visible = !this.btn[ele.name].visible
    },
    changeRoute () {
      let route = ''
      for (const key in this.btn) {
        route = (this.btn[key].visible) ? this.btn[key].route : ''
        if (route.length > 0) { break }
      }
      this.$router.push(`${route}`)
    }
  }
}
</script>
<style scoped>
 .container {
     display: flex;
     width: 100%;
     height: 91%;
     align-content: center;
     justify-content: center;
     align-items: center;
 }
 .icon{
     margin-top: 20px;
     margin-left: 20px;
 }
 .menu {
     display: grid;
     grid-template-rows: auto auto auto;
     border-radius: 10px;
     background: white;
     width: 65%;
     height: 61%;
 }

 .shadow{
    box-shadow: 2px 5px 10px #888888;
}
.btn-circle{
    width: 220px;
    height: 220px;
    border-radius: 50%;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    color: #646464;
    background: white;
}
.btn-circle:focus{
    border: 0;
    outline: none;
}
.btn-circle:hover{
    cursor: pointer;
    border:1.6px solid #304E93;
}

.active{
    border: 1.6px solid #304E93 !important;
}

.row:first-child{
    display: grid;
    grid-template-columns: auto auto;
}
.row:nth-child(2){
    display: flex;
    justify-content: space-around;
}
.row:last-child{
    display: grid;
    justify-content: center;
    align-content: center;
}
.row:not(.row:first-child){
    text-align: center;
}

.btn{
    background: #304E93;
    color: white;
    width: 334px;
    height: 54px;
    border-radius: 20px;
    border: 0;
    font-size: 1.7rem;
}

.btn:hover{
    cursor: pointer;
    background: #2b4685;
}

.btn:focus{
    outline: none;
}

.title{
    font-size: 1.6rem;
    font-weight: bolder;
    color: #827F7F;
}

.square{
    width: 240px;
    height: 240px;
}

</style>
