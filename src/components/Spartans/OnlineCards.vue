<template>
  <div class="card">
      <div class="holder">
        <img width="200" height="200" :src="card" />
        <span class="spartan">Sarah Clarkson</span>
        <span class="team">LV Team</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OnlineCards',
  props: {
    card: String
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
