export const TicketChartData = {
  type: 'line',
  data: {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
    datasets: [
      { // one line graph
        label: '# Address Tickets by Month',
        type: 'bar',
        data: [],
        backgroundColor: [
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)',
          'rgba(71, 183,132,.5)'
        ],
        borderColor: [
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784',
          '#47b784'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    display: true,
    maintainAspectRatio: false
  }
}

export default TicketChartData
