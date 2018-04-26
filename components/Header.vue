<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <img src="~/static/icons/nomd-icon-vertical.svg" class="nomd-icon" alt="Nom-d icon" width="112" height="28">
        <h1 class="title">
          {{ $t('header.title') }}
        </h1>
        <h2 class="subtitle">
          {{ $t('header.subtitle') }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
  .nomd-icon{
    height: 100px;
  }
  .container{
    text-align: center;
  }
</style>
