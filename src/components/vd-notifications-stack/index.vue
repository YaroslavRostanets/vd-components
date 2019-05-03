<template>
    <div class="notification-stack-wrap" :class="{hide: isHide}">
      <div class="notification-stack-list">
        <one-day-notifications
          :notByDays="notByDays"></one-day-notifications>
      </div>
      <ctrl-buttons></ctrl-buttons>
    </div>
</template>

<script>
    import oneDayNotifications from './containers/oneDayNotificaations'
    import ctrlButtons from './containers/ctrlButtons'
    import { store } from './configureStore'

    export default {
        name: "vdNotificationsStack",
        props: ['toggleSelector'],
        components: {
          ctrlButtons,
          oneDayNotifications
        },
        data () {
          const unixToJSTimestamp = unixTimestamp => unixTimestamp * 1000;
          const notByDays = {};
          const notifications = store.state.notifications;
          notifications.forEach((not, i) => {
            let date = new Date(unixToJSTimestamp(not.date));
            let dateFormatted = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`;
            if (!notByDays[dateFormatted]) {
              notByDays[dateFormatted] = []
            }
            notByDays[dateFormatted].push(not);
          });
          return {
            notByDays: notByDays,
            isHide: true
          }
        },
        mounted() {
          const self = this;
          const elSelector = this.toggleSelector;
          document.addEventListener('DOMContentLoaded', function(){
            let el = document.querySelector(elSelector);
            el.addEventListener('click', () => {
              self.isHide = !self.isHide
            });
          });
        }
    }
</script>

<style lang="scss" scoped>
  .notification-stack-wrap {
    position: fixed;
    top: 50px;
    z-index: 99;
    border-left: 1px solid #ccc;
    right: 0;
    width: 300px;
    height: calc( 100% - 60px );
    padding-top: 15px;
    background: #FFFFFF;
    transition: right 0.3s ease;
    &.hide {
      right: -300px;
    }
  }
  .notification-stack-list {
    overflow: auto;
    height: calc( 100% - 60px );
  }

</style>
