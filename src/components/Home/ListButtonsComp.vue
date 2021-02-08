<template>
   <div class="top">
      <ul>
          <li @click="selection" name="home" v-bind:class="{active: buttons.home}" ><font-awesome-icon icon="home" /></li>
          <li @click="selection" name="plus" v-bind:class="{active: buttons.plus}"><font-awesome-icon icon="plus-circle" /></li>
          <li @click="selection" name="map" v-bind:class="{active: buttons.map}"><font-awesome-icon icon="map-marker-alt" /></li>
          <li @click="selection" name="cog" v-bind:class="{active: buttons.cog}"><font-awesome-icon icon="cog" /></li>
      </ul>
   </div>
</template>

<script>
export default {
  name: 'ListButtons',
  data () {
    return {
      buttons: {
        home: true,
        plus: false,
        map: false,
        cog: false
      }
    }
  },
  methods: {
    selection (event) {
      var name = event.currentTarget.getAttribute('name')
      this.buttons[name] = true
      for (var nme in this.buttons) {
        if (name !== nme) { this.buttons[nme] = false }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .top{
     margin-top: 24px;
     width: 100%;
     line-height: 5rem;

 }
 ul{
     position: relative;
     z-index: 1;
     list-style: none;
     padding: 0;
     margin: 0;
     font-size:xx-large;
     text-align: center;
 }
 li{
     position: relative;
     z-index: auto;
     border-radius: 40px;
     margin: 0 auto;
     height: 80px;
     width: 80px;
     background: #F2F2F2;
     margin-top: 48px;
 }
 .active{
     color: white;
     background:#101f55;
     box-shadow: 0px 2px 4px #000000;
 }
 .active:before{
     position: absolute;
     z-index: -1;
     content:"";
     width: clamp(1rem, 14vw, 34vw);
     height: 90px;
     left: -28px;
     bottom: -8px;
     border: 1px solid #f7f7f7d0;
     border-radius: 10px 0px 0px 10px;
     background: #f7f7f7;
 }
 li:hover{
     cursor: pointer;
     background: #101f55;
     color: white;
 }
</style>
