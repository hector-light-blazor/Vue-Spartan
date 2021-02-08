<template>
  <div class="main">
    <div id="left" class="left-nav pop">
        <logo-comp />
        <list-buttons-comp />
        <footer-comp />
    </div>
    <div class="body">
       <header-comp v-on:close="closeNav" />
       <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import LogoComp from '@/components/Home/LogoComp.vue'
import FooterComp from '@/components/Home/FooterComp.vue'
import ListButtonsComp from '@/components/Home/ListButtonsComp.vue'
import HeaderComp from '@/components/Home/HeaderComp.vue'

export default {
  components: { LogoComp, FooterComp, ListButtonsComp, HeaderComp },
  setup () {
    onMounted(() => {
      document.body.style.margin = '0'
    })
  },
  methods: {
    closeNav () {
      var el = document.getElementById('left')
      el.classList.remove('pop')
      if (el.style.width === '0px') {
        el.style.width = 'auto'
        el.style.display = 'grid'
      } else {
        el.style.width = '0'
        el.style.marginLeft = '0'
        el.style.display = 'none'
      }
    }
  }
}
</script>
<style scoped>
 .main{
   display: grid;
   grid-template-columns: 14% auto;
 }
 .left-nav{
   display: grid;
   grid-template-rows: 144px auto auto;
   background: #05173F;
   height: 100vh;
   transition: .53s display ;
   transition-timing-function: cubic-bezier(.38,.52,.37,1);
 }
 .medium{
   background: red;
 }
 .pop {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
