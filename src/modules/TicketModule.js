
const state = {
  ticket: {
    customer_info: {},
    premises_info: {},
    lv: {},
    db: {},
    gis: {}
  },
  index: 0
}

const getters = {
  TICKET: state => state.ticket,
  CUSTOMER: state => state.ticket.customer_info

}

const actions = {
}

const mutations = {
  resetState: (state) => {
    state.ticket = {
      customer_info: {},
      premises_info: {},
      lv: {},
      db: {},
      gis: {}
    }
  },
  setTicketNum: (state, objectid) => {
    state.ticket.objectid = objectid
  },
  setFNAME: (state, fname) => {
    state.ticket.customer_info.cfirst_name = fname
  },
  setLNAME: (state, lname) => {
    state.ticket.customer_info.clast_name = lname
  },
  setTELE: (state, tele) => {
    state.ticket.customer_info.alt_telephone = tele
  },
  setSECTELE: (state, tele) => {
    state.ticket.customer_info.alt2_telephone = tele
  },
  setATEmail: (state, email) => {
    state.ticket.customer_info.cemail = email
  },
  setATSecEmail: (state, email) => {
    state.ticket.customer_info.alt_cemail = email
  },
  setLetterName: (state, letname) => {
    state.ticket.customer_info.letter_name = letname
  },
  setOwnerFName: (state, fname) => {
    state.ticket.premises_info.pfirst_name = fname
  },
  setOwnerLName: (state, lname) => {
    state.ticket.premises_info.plast_name = lname
  },
  setSubName: (state, name) => {
    state.ticket.premises_info.subdivision = name
  },
  setBlock: (state, block) => {
    state.ticket.premises_info.block_num = block
  },
  setLot: (state, lot) => {
    state.ticket.premises_info.lot_num = lot
  },
  setTaxAcc: (state, acc) => {
    state.ticket.premises_info.tax_account_num = acc
  },
  setPropID: (state, prop) => {
    state.ticket.premises_info.property_id = prop
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
