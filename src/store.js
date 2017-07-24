import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */
export default new Vuex.Store({
  state: {
    binaryValue: '00000110', // default value
    decimalValue: 6, // default value
  },
  getters: {
    getBinary: state => state.binaryValue,
    getDecimal(state) {
      const ref = [128,64,32,16,8,4,2,1];
      let decimal = 0;
      let i = state.binaryValue.length; 
      
      while(i--) {
        if(state.binaryValue[i] === '1'){
          decimal += ref[i];
        }
      }
      return decimal;
    },
  },
  mutations: {
    addOne(state) {
      const temp = state.binaryValue;
      state.binaryValue = temp.substr(1).concat('1');
    },
    addZero(state) {
      const temp = state.binaryValue;
      state.binaryValue = temp.substr(1).concat('0');
    },
  },
});
