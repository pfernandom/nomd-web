<template>
  <div>
    <nomd-header></nomd-header>
    <nuxt/>
    <nomd-footer></nomd-footer>
  </div>
</template>

<script>
import '~/assets/font-config';
import NomdHeader from '~/components/Header.vue';
import NomdFooter from '~/components/Footer.vue';

export default {
  components: {
    NomdHeader,
    NomdFooter
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .svg-inline--fa {
    margin: 0px 5px;
  }
</style>
