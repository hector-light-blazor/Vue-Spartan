<template>
  <div class="card">
     <canvas width="220" height="500" ref="canvas"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import TicketChartData from './Data.js'
import axios from 'axios'
import * as endpoint from '@/api/Global'
import { req } from '@/api/Req'
import { mapGetters } from 'vuex'

export default {
  name: 'Chart',
  computed: { ...mapGetters(['SPARTAN_INFO']) },
  data () {
    return {
      dataChart: TicketChartData,
      chart: null
    }
  },
  async mounted () {
    const response = await axios.get(`${endpoint.first}${req.Tickets.getCharts}${this.SPARTAN_INFO.organization_id}`)
    console.log(response.data)
    this.dataChart.data.datasets[0].data = (response.data.success) ? this.parseData(response.data.charts) : []
    this.createChart(this.dataChart)
  },
  methods: {
    parseData (data) {
      const results = []
      data.forEach(obj => {
        results.push(obj.total)
      })
      return results
    },
    createChart (chartData) {
      const ctx = this.$refs.canvas
      this.chart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    }
  }
}
</script>

<style scoped>
canvas{
  padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
}
</style>
