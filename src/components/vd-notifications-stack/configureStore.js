import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    lastAction: null,
    notifications: [
      {
        id: 1,
        date: 1556869205,
        title: 'Календар подій',
        text: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 2,
        date: 1556813011,
        title: 'Календар подій',
        text: 'Проснувшись однажды утром после беспокойного ' +
          'сна, Грегор Замза обнаружил'
      },
      {
        id: 3,
        date: 1556726693,
        title: 'Диспетчер паролів',
        text: 'Далеко-далеко за словесными горами в ' +
          'стране гласных и согласных живут рыбные тексты.'
      },
      {
        id: 4,
        date: 1556640293,
        title: 'Календар подій',
        text: 'Lorem ipsum dolor sit amet'
      },
      {
        id: 5,
        date: 1556640293,
        title: 'Календар подій',
        text: 'Lorem ipsum dolor sit amet'
      }
    ]
  },
  mutations: {
    addNotification (state, notification) {
      console.log(store.state.notifications);
      state.notifications.push(notification)
    },
    removeNotification (state, id) {
      let index = state.notifications.findIndex((item) => item.id === id);
      state.notifications.splice(index, 1);
      console.log(store.state.notifications);
    }
  }
});
