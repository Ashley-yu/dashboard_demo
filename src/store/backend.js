import moment from 'moment';

export default {
  namespaced: true,
  state: {
    userData: [
      {
        id: 1,
        name: 'MarkOtto',
        email: 'ottoto@wxample.com',
        status: true,
        create: '2020-11-23 09:09:09',
        update: '',
      },
      {
        id: 2,
        name: 'JacobThornton',
        email: 'thornton@wxample.com',
        status: true,
        create: '2020-11-23 13:33:20',
        update: '',
      },
      {
        id: 3,
        name: 'admin',
        email: 'bird@wxample.com',
        status: false,
        create: '2020-11-23 15:03:18',
        update: '2020-11-24 11:28:03',
      }
    ],
  },
  mutations: {
    addUserData(state, value) {
      if (state.userData.length > 0) {
        value.id = Math.max(...state.userData.map(item => item.id)) + 1;
        value.status = true;
        value.create = moment().format('YYYY-MM-DD hh:mm:ss');
      }
      state.userData.push(value);
    },
    updateUserData(state, item) {
      item.update = moment().format('YYYY-MM-DD hh:mm:ss');
      state.userData[item.id - 1] = item;
    },
    disableUserData(state, id) {
      state.userData[id - 1].update = moment().format('YYYY-MM-DD hh:mm:ss');
      state.userData[id - 1].status = !state.userData[id - 1].status;
    },
  },
  actions: {
    addUserData({ commit }, value) {
      commit('addUserData', value);
    },
    updateUserData({ commit }, item) {
      commit('updateUserData', item);
    },
    disableUserData({ commit }, value) {
      commit('disableUserData', value);
    },
  },
};
