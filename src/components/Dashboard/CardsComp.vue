<template>
  <div class="card">
      <div class="top">
        <span>{{title}}</span>
        <font-awesome-icon v-bind:style="{color}" class="icon" icon="ticket-alt" />
      </div>
      <div class="stats">
         <span>{{stats}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CardsComp',
  props: {
    title: String,
    stats: String,
    color: String
  }
}
</script>

<style scoped>
.card {
    display: grid;
    grid-template-rows: auto auto;
    background: white;
    border-radius: 18px;
    height: 75%;
    box-shadow: 2px 5px 10px #888888;
}
.top{
  display: grid;
  grid-template-columns: auto auto;
  padding: 10px;
  color: #726868;
  font-weight: bold;
}
.top > span{
  font-size: small;
}
.stats{
  font-weight: bold;
  font-size: 4.5rem;
  color: #726868;
}
.stats > span{
  margin-left: 30px;
}
.icon{
  font-size: 3rem;
  margin-left: auto;
}
</style>
