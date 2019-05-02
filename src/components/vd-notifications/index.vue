<template>
    <div>
      <b-button @click="makeToast()" class="mb-2">Default</b-button>
    </div>
</template>

<script>
  import Vue from 'vue'
  import Toast from 'bootstrap-vue/es/components/toast'
  import BToast from 'bootstrap-vue/es/components/toast/toast'
  import BButton from 'bootstrap-vue/es/components/button/button'
  import BToaster from 'bootstrap-vue/es/components/toast/toaster'

  Vue.use(Toast);

    export default {
      name: "vdNotifications",
      components: {
        BToast, BButton, BToaster
      },
      methods: {
        makeToast(variant = null) {
          this.$bvToast.toast('Toast body content', {
            title: `Variant ${variant || 'default'}`,
            toaster: 'b-toaster-bottom-right',
            variant: variant,
            solid: true,
            appendToast: true
          })
        }
      },
      mounted () {
        console.log('context: ', this);
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
