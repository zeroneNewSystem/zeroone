const outcomeitemsModule = {
  state: {
    outcomeitems: [
      { id: 1, name: 'كهرباء' },
      { id: 2, name: 'ماء' },
      { id: 3, name: 'إيجار' },
      { id: 4, name: 'تلفون' },

    ],


    outcomes: [],
    outcomeitems: [],

  },
  mutations: {
    //outcomeitems
    load_outcomeitems: (state, payload) => {
      state.outcomeitems = payload;
      console.log(payload);
      for (var k in payload) {
        //state.outcomeitems.unshift(payload[k]);
      }
    },
    add_outcomeitems: (state, payload) => {
      state.outcomeitems.unshift(payload);//one invoice
    },
    update_outcomeitems: (state, payload) => { // one company to update
      state.outcomeitems.splice(// splice used to cut and add!
        state.outcomeitems.findIndex(el => el.id === payload.id)
        , 1, payload);
    },
    remove_outcomeitems: (state, payload) => {
      console.log('wantremove!')
      state.outcomeitems.splice(state.outcomeitems.indexOf(payload), 1);
    },

    // add_outcomeitems: (state, payload) => {
    //   payload.id = 20;
    //   state.outcomeitems.unshift(payload);//one invoice
    // },
  },
  getters: {},
  actions: {
    
    //outcomeitems
    load_outcomeitems: (cxt) => {
      var payload = {};
      payload.flag = 'getoutcomeitems';
      payload.filename = 'outcomeitems';
      axios.post('router.php', payload).then(response => {
      //  console.log(response.data);
        cxt.commit('load_outcomeitems', response.data)
      });
    },
    add_outcomeitems: (cxt, payload) => {

      payload.flag = 'addoutcomeitems';
      payload.filename = 'outcomeitems';

      axios.post('router.php', payload).
        then(
          response => {
            delete payload.flag;

            console.log('addoutcomeitems added');
            payload.id = response.data;
            console.log(payload.id);
            cxt.commit('add_outcomeitems', payload)
          }
        )
    },
    update_outcomeitems: (cxt, payload) => {
      
      payload.flag = 'updateoutcomeitems';
      payload.filename = 'outcomeitems';
      
      axios.post('router.php', payload).
        then(
          response => {
            cxt.commit('update_outcomeitems', payload)
          }
        )
    },
    remove_outcomeitems: (cxt, payload) => {
      
      payload.flag = 'removeoutcomeitems';
      payload.filename = 'outcomeitems';
      
      axios.post('router.php', payload).
        then(
          response => {
            cxt.commit('remove_outcomeitems', payload)
            payload = response.data;
          }
        )
    },
  },  
}
export default outcomeitemsModule
