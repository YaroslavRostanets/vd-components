<template>
  <div class="one-day">

    <div class="date-now-wrap">
      <div class="date-now">
            <span class="day-of-week">
              Сьогодні
            </span>
        <span class="date-string">
              23 квітня
            </span>
      </div>
    </div>

    <one-notification></one-notification>

  </div>
</template>

<script>
    import oneNotification from './oneNotification'

    export default {
      name: "oneDayNotifications",
      components: {
        oneNotification
      }
    }
</script>

<style scoped>
  .date-now-wrap {
    display: flex;
    justify-content: center;
  }
  .date-now {
    background: #FD5;
    color: rgba(0, 0, 0, 0.8);
    font: 12px/16px Arial;
    padding: 4px 15px;
    border-radius: 12px;
  }
  .date-string {
    color: rgba(0, 0, 0, 0.33);
    font: italic 11px/16px Arial;
    margin: 0 0 0 10px;
  }

</style>
