<template>

    <div class="one-notification">
      <div class="date-num">
        {{formattedDate}}
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
    export default {
        name: "oneNotification",
        props: ["notification"],
        computed: {
          formattedDate () {
            let date = new Date(this.notification.date * 1000);
            return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
          }
        }
    }
</script>

<style lang="scss" scoped>
  .one-notification {
    border-bottom: 1px solid #efefef;
    padding: 10px 20px;
  &:last-child {
     border-bottom: none;
   }
  }
  .title {
    font-weight: 500;
    font-size: 16px;
  }
  .not-text {
    font-size: 13px;
  }
  .date-num {
    font-size: 13px;
  }
</style>
