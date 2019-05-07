<template>

    <div class="one-notification">
      <div class="top-part">
        <div class="date-num">
          {{formattedDate}}
        </div>
        <a href="#" v-b-tooltip.bottomleft.hover
           title="Відмітити повідомлення як прочитане"
           @click="removeNotification(notification.id)" class="close-btn">
          <close-icon :size="20"></close-icon>
        </a>
      </div>
      <div class="title">
        {{notification.title}}
      </div>
      <div class="not-text">
        {{notification.text}}
      </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    import CloseIcon from "vue-material-design-icons/Close"
    import BButton from 'bootstrap-vue/es/components/button/button'
    import vBTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip'

    Vue.directive('b-tooltip', vBTooltip);

    export default {
        name: "oneNotification",
        props: ["notification", 'removeNotification'],
        computed: {
          formattedDate () {
            let date = new Date(this.notification.date * 1000);
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
          }
        },
        components: {
          CloseIcon, BButton
        }
    }
</script>

<style lang="scss" scoped>
  .one-notification {
    border-bottom: 1px solid #efefef;
    padding: 10px 20px;
    background: #FFFFFF;
    //transition: all 0.1s ease;
    &:last-child {
       //border-bottom: none;
    }
    &:hover {
      background: #EAF7FF;
      .close-btn {
        display: flex;
      }
    }
  }
  .title {
    font-weight: 500;
    font-size: 16px;
    padding-right: 30px;
  }
  .not-text {
    font-size: 13px;
  }
  .date-num {
    font-size: 13px;
    flex-grow: 1;
  }
  .top-part {
    display: flex;
    position: relative;
    padding-right: 30px;
  }
  .close-btn {
    display: none;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    background: #FFFFFF;
    position: absolute;
    right: 0;
    top: 0;
  }
  .close-btn span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
