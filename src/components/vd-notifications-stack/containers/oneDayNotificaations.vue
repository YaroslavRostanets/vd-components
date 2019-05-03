<template>
  <div>
    <div v-for="(day, date) in notByDays" class="one-day">

      <div class="date-now-wrap">
        <div class="date-now">
            <span class="day-of-week">
              {{todayFormatted === date ? 'Сьогодні' : getDayOfWeekName(date)}}
            </span>
            <span class="date-string">
              {{`${getDate(date)} ${getMonthName(date)}`}}
            </span>
        </div>
      </div>

      <one-notification
        v-for="notification in day"
        :notification="notification"></one-notification>

    </div>
  </div>
</template>

<script>
    import oneNotification from './oneNotification'

    export default {
      name: "oneDayNotifications",
      props: ['notByDays'],
      components: {
        oneNotification
      },
      data() {
        let now = new Date();
        let todayFormatted =`${now.getMonth()}-${now.getDate()}-${now.getFullYear()}`;
        return {
          todayFormatted
        }
      },
      methods: {
        getDayOfWeekName: (date) => {
          return new Date(date).toLocaleString(
            "uk",  {weekday: "long"}
          );
        },
        getMonthName: (date) => {
          return new Date(date).toLocaleString(
            "uk",  {month: "long"}
          );
        },
        getDate: (date) => date.split('-')[1]
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
