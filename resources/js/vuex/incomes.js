const incomesModule = {
  state: {
    incomes: [
      { id: 1, name: 'كهرباء',income_date: },
      { id: 2, income_name: 'ماء' },
      { id: 3, income_name: 'إيجار' },
      { id: 4, income_name: 'تلفون' },

    ],


    outcomes: [],
    outcomeitems: [],

  },
  mutations: {
    //incomes
    load_incomes: (state, payload) => {
      state.incomes = payload;
      console.log(payload);
      for (var k in payload) {
        //state.incomes.unshift(payload[k]);
      }
    },
    add_incomes: (state, payload) => {
      state.incomes.unshift(payload);//one invoice
    },
    update_incomes: (state, payload) => { // one company to update
      state.incomes.splice(// splice used to cut and add!
        state.incomes.findIndex(el => el.id === payload.id)
        , 1, payload);
    },
    remove_incomes: (state, payload) => {
      console.log('wantremove!')
      state.incomes.splice(state.incomes.indexOf(payload), 1);
    },

    // add_incomes: (state, payload) => {
    //   payload.id = 20;
    //   state.incomes.unshift(payload);//one invoice
    // },
  },
  getters: {},
  actions: {
    
    //incomes
    load_incomes: (cxt) => {
      var payload = {};
      payload.flag = 'getincomes';
      payload.filename = 'incomes';

      axios.post('router.php', payload).then(response => {
      //  console.log(response.data);
        cxt.commit('load_incomes', response.data)
      });
    },
    add_incomes: (cxt, payload) => {

      payload.flag = 'addincomes';
      payload.filename = 'incomes';

      axios.post('router.php', payload).
        then(
          response => {
            delete payload.flag;

            console.log('addincomes added');
            payload.id = response.data;
            console.log(payload.id);
            cxt.commit('add_incomes', payload)
          }
        )
    },
    update_incomes: (cxt, payload) => {
      
      payload.flag = 'updateincomes';
      payload.filename = 'incomes';
      
      axios.post('router.php', payload).
        then(
          response => {
            cxt.commit('update_incomes', payload)
          }
        )
    },
    remove_incomes: (cxt, payload) => {
      
      payload.flag = 'removeincomes';
      payload.filename = 'incomes';
      
      axios.post('router.php', payload).
        then(
          response => {
            cxt.commit('remove_incomes', payload)
            payload = response.data;
          }
        )
    },
  },  
}
export default incomesModule
