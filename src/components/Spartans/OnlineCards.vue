<template>
  <div class="card">
      <div class="holder">
        <img width="200" height="200" @error="onIMGError" v-bind:src="getIcon(spartan.icon)" />
        <span class="spartan">{{spartanFullName(spartan.user_id)}}</span>
        <span class="team">{{getTeam(spartan.work_center)}}</span>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { image } from '@/api/Global'
export default {
  name: 'OnlineCards',
  computed: { ...mapGetters(['spartanFullName', 'getIcon', 'getTeam']) },
  methods: {
    onIMGError (event) {
      console.log(image)
      var target = event.target
      target.src = image
    }
  },
  props: {
    spartan: Object
  }
}
</script>

<style scoped>
.card{
   display: grid;
   text-align: center;
   margin-top: 10px;
   padding: 12px;
}
.holder{
    display: grid;
    padding: 10px;
    text-align: center;
}
img{
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 2px 5px 10px #888888;
}
.spartan{
    color: #524949;
    font-weight: bolder;
}
.team{
    color: #524949;
}
.holder:hover{
    box-shadow: 2px 5px 10px #888888;
    cursor: pointer;
}
</style>
