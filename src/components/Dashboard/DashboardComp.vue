<template>
 <div class="container">
     <div class="tasks shadow">
         <cards-comp title="GENERAL TASKS" color="#0B3591" stats="200" />
         <cards-comp title="CRITICAL TASKS" color="#C40D0D" stats="120" />
         <cards-comp title="ASSIGNED TASKS" color="#1BB444" stats="230" />
         <cards-comp title="RECENT ARCHIVED" color="#E5D655" stats="330" />
     </div>
     <div class="body">
         <div class="stats shadow">
             Tasks By Month
         </div>
         <div class="spartans shadow">
             <div class="title">Online</div>
             <div class="contents">
                 <online-cards v-for="spartan in listOfOnline" :spartan="spartan" :key="spartan.user_id" />
             </div>
         </div>
     </div>
 </div>
</template>

<script>
import OnlineCards from '@/components/Spartans/OnlineCards.vue'
import CardsComp from './CardsComp.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  components: { CardsComp, OnlineCards },
  computed: { ...mapGetters(['listOfOnline', 'totalUsers']) },
  data () {
    return {
      list: [
        'https://www.factinate.com/wp-content/uploads/2017/11/GettyImages-803015182.jpg', 'https://www.factinate.com/wp-content/uploads/2017/11/GettyImages-803015182.jpg',
        'https://www.factinate.com/wp-content/uploads/2017/11/GettyImages-803015182.jpg',
        'https://www.factinate.com/wp-content/uploads/2017/11/GettyImages-803015182.jpg',
        'https://www.factinate.com/wp-content/uploads/2017/11/GettyImages-803015182.jpg']
    }
  }
}
</script>

<style scoped>
.container{
    margin: 0 auto;
    margin-top: 20px;
    height: 80%;
}
.contents{
    margin: 0 auto;
    width: 80%;
    height: 380px;
    margin-top: 20px;
    overflow:hidden;
}

  .contents:hover{
     overflow: auto;
  }
  .contents::-webkit-scrollbar{
    width: 10px;
    border-radius: 20px;
  }

  /* Track */
  .contents::-webkit-scrollbar-track {

    width: 1px;
    border-radius: 4px;
    box-shadow: inset 0 0 10px 10px;
    border: solid 3px transparent;
  }

  /* Handle */
  .contents::-webkit-scrollbar-thumb {

    width:2px;
    border-radius: 10px;
    background: rgb(139, 10, 10);
  }

.shadow{
    box-shadow: 2px 5px 10px #888888;
}
.tasks{
    display: grid;
    grid-template-columns: auto auto auto auto;
    width: 90%;
    height: 240px;
    padding: 14px;
    border-radius: 20px;
    background: white;
    margin: 0 auto;
    gap: 14px;
}
.body{
    display: grid;
    grid-template-columns: auto auto;
    padding: 18px;
    height: 60%;
}
.stats{
    margin: 0 auto;
    height: 200px;
    margin-left: 40px;
    width: 100%;
    border-radius: 20px;
    background: white;
}
.spartans{
    border-radius: 20px;
    background: white;
    height: 100%;
    margin: 0 auto;
    width: 60%;
    display: grid;
    grid-template-rows: auto auto;
}
.title{
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
    font-size: x-large;
    height: 10px;
    color: #646464;
    font-weight: bolder;
}
</style>
