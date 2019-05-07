<template>
    <div class="notification-stack-wrap" :class="{hide: isHide}" ref="wrap">
        <div v-bar="{ preventParentScroll: true, scrollThrottle: 30}"
             class="notification-stack-list" v-bind:speed=50 theme="light">
            <one-day-notifications
                    :removeNotification="removeNotification"
                    :notByDays="notByDays"></one-day-notifications>
        </div>
      <ctrl-buttons></ctrl-buttons>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuebar from 'vuebar';
    import oneDayNotifications from './containers/oneDayNotifications'
    import ctrlButtons from './containers/ctrlButtons'
    import { store } from './configureStore'

    import './scroll.css';

    Vue.use(Vuebar);

    export default {
      name: "vdNotificationsStack",
      props: ['toggleSelector'],
      components: {
        ctrlButtons,
        oneDayNotifications
      },
      data () {
        return {
          isHide: true,
          notifications: store.state.notifications
        }
      },
      methods: {
        removeNotification (id) {
          console.log(id);
          store.commit('removeNotification', id);
        }
      },
      computed: {
        notByDays () {
          const unixToJSTimestamp = unixTimestamp => unixTimestamp * 1000;
          const notByDays = {};
          const notifications = store.state.notifications.slice().sort((a,b) => b.date-a.date);
          notifications.forEach((not, i) => {
            let date = new Date(unixToJSTimestamp(not.date));
            let dateFormatted = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
            if (!notByDays[dateFormatted]) {
              notByDays[dateFormatted] = []
            }
            notByDays[dateFormatted].push(not);
          });

          return notByDays;
        }
      },
      mounted () {
        const self = this;
        const elSelector = this.toggleSelector;
        const el = document.querySelector(elSelector);
        document.addEventListener('DOMContentLoaded', function(){
          el.addEventListener('click', () => {
            self.isHide = !self.isHide
          });
          document.addEventListener("click", function(event){
            let wrap = self.$refs.wrap;
            if (!el.contains(event.target) && !(wrap.contains(event.target) || event.target.closest('.close-btn')) ) {
              self.isHide = true;
            }
          });
        });
      }
    }

</script>

<style lang="scss" scoped>
  .notification-stack-wrap {
    position: fixed;
    top: 60px;
    z-index: 99;
    border-left: 1px solid #ccc;
    right: 0;
    width: 450px;
    height: calc( 100% - 60px );
    padding-top: 15px;
    background: #FFFFFF;
    transition: right 0.3s ease;
    &.hide {
      right: -450px;
    }
  }
  .notification-stack-list {
    overflow: hidden;
    height: calc( 100% - 60px );
  }
</style>
