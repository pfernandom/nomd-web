<template>
  <div v-if="isGhostState" class="panel-block-ghost">
  </div>

  <router-link v-else class="panel-block" :class="{ 'is-active': isActive }" :to="to">
    <font-awesome-icon icon="angle-right" size="xs" class="icon"/>
    {{isGhostState}}
    <slot>
    </slot>
  </router-link>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'PanelBlock',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    to: String,
    isGhostState: Boolean,
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .panel-block{
    border-bottom: initial;
    text-decoration: none;
  }

  .panel-block-ghost{
    margin: 0.75em 1em 1.5em 1em;
    padding: 0.3em;
    height: 1em;
    background: linear-gradient(-45deg, #e4e4e4, #f6f7f9, #e4e4e4);
    animation: Gradient 1s linear infinite;
    background-size: 200% 200%;
  }

  @keyframes Gradient {
    5% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }
</style>
