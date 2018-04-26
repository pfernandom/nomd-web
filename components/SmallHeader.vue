<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <router-link  class="navbar-item" to="/">
      <img src="~/static/icons/nomd-icon.svg" class="nomd-icon" alt="Nom-d, helping people move to other countries" width="112" height="28">
    </router-link>
    <div class="navbar-burger burger" :class="{ 'is-active': isActive }" v-on:click="showMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu" :class="{ 'is-active': isActive }">
    <div class="navbar-start">
      <router-link class="navbar-item" to="/">
        Home
      </router-link>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/documentation/overview/start/">
          Docs
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/documentation/overview/start/">
            Overview
          </a>
          <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <font-awesome-icon size="xs" :icon="['fab', 'twitter']" />
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              <font-awesome-icon icon="download" size="xs" />
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'SmallHeader',
  data() {
    return {
      isActive: false,
      leftMenu: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Docs',
          subs: [
            {
              text: 'Overview',
              to: '/',
            },
            {
              text: 'Default',
              to: '/',
            },
          ],
        },
      ],
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    showMenu() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navbar-menu{
    text-align: initial;
  }

  .button, .navbar-item, .navbar-link {
    text-decoration: none;
  }
</style>
