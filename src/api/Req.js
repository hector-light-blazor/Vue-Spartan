
export const req = {
  Login: {
    auth: 'users/Authorize',
    getUser: 'users/get'
  },
  Users: {
    getAll: 'users/getListOfUsers',
    getImage: 'users/getUserImage?pic='
  },
  Tickets: {
    getCharts: 'addressticket/getCharts/?o=',
    openByOrga: 'addressticket/get_open_tickets',
    assign: 'addressticket/get_user_inbox'
  }
}
