<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <img src="/static/img/icons/nomd-icon-vertical.svg" class="nomd-icon" alt="Nom-d icon" width="112" height="28">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subtitle}}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      title: 'Moving to another country?',
      subtitle: 'Let us help you understand what you need to do to move and have a happy life in your new home.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .nomd-icon{
    height: 100px;
  }
</style>
