<template>
  <div class="one-notification">
    <div class="date-num">
      23.04.2019
    </div>
    <div class="title">
      Календар подій
    </div>
    <div class="not-text">
      Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
</template>

<script>
    export default {
        name: "oneNotification"
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
