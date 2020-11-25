export default {
  namespaced: true,
  state: {
    userData: [
      {
        id: 1,
        name: 'MarkOtto',
        email: 'ottoto@wxample.com',
        status: 'Sent',
        create: '2020-11-23 09:09:09',
        update: '',
      },
      {
        id: 2,
        name: 'JacobThornton',
        email: 'thornton@wxample.com',
        status: 'Sent',
        create: '2020-11-23 13:33:20',
        update: '',
      },
      {
        id: 3,
        name: 'admin',
        email: 'bird@wxample.com',
        status: '',
        create: '2020-11-23 15:03:18',
        update: '2020-11-24 11:28:03',
      }
    ],
  },
  mutations: {
    addUserData(state, value) {
      if (state.userData.length > 0) {
        let date = new Date(Date.now());
        date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        value.id = Math.max(...state.userData.map(item => item.id)) + 1;
        value.create = date;
      }
      state.userData.push(value);
    },
    updateUserData(state, item) {
      let date = new Date(Date.now());
      date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      item.update = date;
      state.userData[item.id - 1] = item;
    },
    disableUserData(state, id) {
      let date = new Date(Date.now());
      date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      state.userData[id - 1].update = date;
      state.userData[id - 1].status = '';
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
