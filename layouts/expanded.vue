<template>
  <div>
    <nomd-header></nomd-header>
    <nuxt/>
    <nomd-footer></nomd-footer>
  </div>
</template>

<script>
import '~/assets/font-config';
import NomdHeader from '~/components/SmallHeader.vue';
import NomdFooter from '~/components/Footer.vue';


export default {
  components: {
    NomdHeader,
    NomdFooter
  }
}
</script>

<style lang="scss">

</style>
