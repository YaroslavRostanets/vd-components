<template>
    <div class="group">
      <b-button variant="primary">Всі повідомлення</b-button>
      <b-button variant="primary">Налаштування повідомлень</b-button>
    </div>
</template>

<script>
    import BButton from 'bootstrap-vue/es/components/button/button'

    export default {
      name: "ctrlButtons",
      components: {
          BButton
      }
    }
</script>

<style scoped>
  .group {
    display: flex;
    padding: 10px 5px;
    border-top: 1px solid #ccc;
  }
  .btn {
    font-size: 14px;
    padding: 5px 3px;
    margin: 0 5px;
    line-height: 15px;
  }
</style>
