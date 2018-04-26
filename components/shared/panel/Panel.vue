<template>
  <nav class="panel">
    <p class="panel-heading">
      <slot name="heading"></slot>
    </p>
    <div class="panel-block">
      <div class="control has-icons-left">
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <font-awesome-icon icon="search" size="xs" class="icon is-small" aria-hidden="true"/>
        </span>
      </div>
    </div>
    <slot name="body"></slot>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'Panel',
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
  .icon.is-small{
    width: 15px;
    margin: 2px 5px;
  }
</style>
