import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    notifications: [
      {
        date: 1556869205,
        title: 'Календар подій',
        text: 'Lorem ipsum dolor sit amet'
      },
      {
        date: 1556813011,
        title: 'Календар подій',
        text: 'Проснувшись однажды утром после беспокойного ' +
          'сна, Грегор Замза обнаружил'
      },
      {
        date: 1556726693,
        title: 'Диспетчер паролів',
        text: 'Далеко-далеко за словесными горами в ' +
          'стране гласных и согласных живут рыбные тексты.'
      },
      {
        date: 1556640293,
        title: 'Календар подій',
        text: 'Lorem ipsum dolor sit amet'
      },
      {
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
    }
  }
});
