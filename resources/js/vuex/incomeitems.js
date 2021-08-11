const incomeitemsModule = {
  state: {
    incomeitems: [
      { id: 1, name: 'كهرباء' },
      { id: 2, name: 'ماء' },
      { id: 3, name: 'إيجار' },
      { id: 4, name: 'تلفون' },

    ],


    outcomes: [],
    outcomeitems: [],

  },
  mutations: {
    //incomeitems
    load_incomeitems: (state, payload) => {
      state.incomeitems = payload;
      console.log(payload);
      for (var k in payload) {
        //state.incomeitems.unshift(payload[k]);
      }
    },
    add_incomeitems: (state, payload) => {
      state.incomeitems.unshift(payload);//one invoice
    },
    update_incomeitems: (state, payload) => { // one company to update
      state.incomeitems.splice(// splice used to cut and add!
        state.incomeitems.findIndex(el => el.id === payload.id)
        , 1, payload);
    },
    remove_incomeitems: (state, payload) => {
      console.log('wantremove!')
      state.incomeitems.splice(state.incomeitems.indexOf(payload), 1);
    },

    // add_incomeitems: (state, payload) => {
    //   payload.id = 20;
    //   state.incomeitems.unshift(payload);//one invoice
    // },
  },
  getters: {},
  actions: {
    
    //incomeitems
    load_incomeitems: (cxt) => {
      var payload = {};
      payload.flag = 'getincomeitems';
      payload.filename = 'incomeitems';
      axios.post('router.php', payload).then(response => {
      //  console.log(response.data);
        cxt.commit('load_incomeitems', response.data)
      });
    },
    add_incomeitems: (cxt, payload) => {

      payload.flag = 'addincomeitems';
      payload.filename = 'incomeitems';

      axios.post('router.php', payload).
        then(
          response => {
            delete payload.flag;

            console.log('addincomeitems added');
            payload.id = response.data;
            console.log(payload.id);
            cxt.commit('add_incomeitems', payload)
          }
        )
    },
    update_incomeitems: (cxt, payload) => {
      
      payload.flag = 'updateincomeitems';
      payload.filename = 'incomeitems';
      
      axios.post('router.php', payload).
        then(
          response => {
            cxt.commit('update_incomeitems', payload)
          }
        )
    },
    remove_incomeitems: (cxt, payload) => {
      
      payload.flag = 'removeincomeitems';
      payload.filename = 'incomeitems';
      
      axios.post('router.php', payload).
        then(
          response => {
            cxt.commit('remove_incomeitems', payload)
            payload = response.data;
          }
        )
    },
  },  
}
export default incomeitemsModule
