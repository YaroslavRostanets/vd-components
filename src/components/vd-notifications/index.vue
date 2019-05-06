<template>
    <div>
      <b-button @click="makeToast()">Show toast</b-button>
      <b-toast v-for="(toast, index) in toasts"
               :id="'vd-toast-' + index"
               :key="index"
               variant="custom"
               toaster="b-toaster-bottom-right"
               :append-toast="true"
               solid>
        <div class="toast-title-wrap">
          <div class="icon">
            <information-icon :size="34"></information-icon>
          </div>
          <div class="toast-date-title">
            <div class="toast-date">{{formattedDate(toast.date)}}</div>
            <div class="toast-title">{{toast.title}} {{index}}</div>
          </div>
        </div>
        <div class="toast-text">
          {{toast.text}}
        </div>
      </b-toast>
    </div>
</template>

<script>
  import Vue from 'vue'
  import { store } from '../vd-notifications-stack/configureStore'
  import Toast from 'bootstrap-vue/es/components/toast'
  import BToast from 'bootstrap-vue/es/components/toast/toast'
  import BButton from 'bootstrap-vue/es/components/button/button'
  import BToaster from 'bootstrap-vue/es/components/toast/toaster'
  import InformationIcon from "vue-material-design-icons/Information.vue"
  import './b-toast-style.scss'

  Vue.use(Toast);

    export default {
      name: "vdNotifications",
      components: {
        BToast, BButton, BToaster, InformationIcon
      },
      data () {
        return {
          notifications: store.state.notifications,
          toasts: []
        }
      },
      methods: {
        formattedDate (date) {
          let d = new Date(date * 1000);
          return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
        },
        makeToast() {
          let notification = {
            date: Math.round(Date.now() / 1000),
            title: 'Додана подія',
            text: 'Далеко-далеко за словесными горами...'
          };
          store.commit('addNotification', notification);
        }
      },
      watch: {
        notifications () {
          this.toasts.push( this.notifications.slice().pop() );
          setTimeout(() => {
            this.$bvToast.show('vd-toast-' + (this.toasts.length - 1));
          }, 100);

        }
      }
    }
</script>

<style scoped>
  .b-toaster.b-toaster-top-right {
    top: 0;
  }
  .b-toaster.b-toaster-top-right {
    position: fixed;
    left: .5rem;
    right: .5rem;
    margin: 0;
    padding: 0;
    height: 0;
    overflow: visible;
  }

</style>
