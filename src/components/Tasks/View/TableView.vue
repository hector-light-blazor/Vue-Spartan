<template>
    <div>
        <list-tickets></list-tickets>
    </div>
</template>
<script>
import ListTickets from './ListTickets'

export default {
  name: 'TableView',
  components: { ListTickets }
}
</script>

<style scoped>
.header-table{
  height: 40px;
  text-align: center;
}
.table{
  margin: 0 auto;
  width: 80%;
  height: 550px;
  background: white;
}
</style>
