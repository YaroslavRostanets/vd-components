<template>
    <div class="notification-stack-wrap">
      <div class="notification-stack-list">
        <one-day-notifications></one-day-notifications>
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
        components: {
          ctrlButtons,
          oneDayNotifications
        },
        data () {
          const unixToJSTimestamp = (unixTimestamp) => unixTimestamp * 1000;
          const notByDays = {};
          const notifications = store.state.notifications;
          notifications.forEach((not, i) => {
            let date = new Date(unixToJSTimestamp(not.date));
            let dateFormatted = `${date.getDate()}.${date.getMonth()}.${date.getYeahr()}`
            if (notByDays[dateFormatted]) {
              
            }
            console.log( new Date(unixToJSTimestamp(not.date)) );
          });
          return {

          }
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
  .notification-stack-wrap {
    position: fixed;
    top: 0px;
    z-index: 99;
    border-left: 1px solid #ccc;
    right: 0;
    width: 300px;
    height: 100%;
    padding-top: 15px;
  }
  .notification-stack-list {
    overflow: auto;
    height: calc( 100% - 60px );
  }

</style>
