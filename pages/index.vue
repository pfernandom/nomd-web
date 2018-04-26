<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <Panel>
            <span slot="heading">{{ $t('home.taxes') }}</span>
            <div slot="body">
                <PanelBlock v-for="link in taxes.links" :key="link.id" :to="link.route" :is-ghost-state="link.isGhostState">
                  {{link.text}}
                </PanelBlock>
            </div>
          </Panel>
        </div>
        <div class="column">
          <Panel>
            <span slot="heading">{{ $t('home.immigration') }}</span>
            <div slot="body">
                <PanelBlock v-for="link in immigration.links" :key="link.id" :to="link.route" :is-ghost-state="link.isGhostState">
                  {{link.text}}
                </PanelBlock>
            </div>
          </Panel>
        </div>
        <div class="column">
          <Panel>
            <span slot="heading">{{ $t('home.family') }}</span>
            <div slot="body">
                <PanelBlock v-for="link in family.links" :key="link.id" :to="link.route" :is-ghost-state="link.isGhostState">
                  {{link.text}}
                </PanelBlock>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import { Panel, PanelBlock } from '~/components/shared/panel';

const CATEGORY = {
  MONEY: 'MONEY',
  FAMILY: 'FAMILY',
  IMMIGRATION: 'IMMIGRATION',
};

const ghostArray = Array(4).fill({ route: '', text: '', isGhostState: true });

const format = (name, route, posts) => {
  const links = posts.map(a => ({
    text: a.title,
    route: `${route}/${a.id}`,
    isGhostState: a.isGhostState,
  }));
  return {
    name,
    links,
  };
};

export default {
  components: {
    Panel,
    PanelBlock,
  },
  async fetch({ store }) {
    return store.dispatch('fetchArticles');
  },
  computed: {
    ...mapState({
      allPosts: 'posts',
      taxes: (state) => {
        const posts = state.posts && state.posts.length >= 0 ?
          state.posts
            .filter(p => p.categories.includes(CATEGORY.MONEY)) :
          ghostArray;
        return format('Money', '/money', posts);
      },
      immigration: (state) => {
        const posts = state.posts && state.posts.length >= 0 ?
          state.posts
            .filter(p => p.categories.includes(CATEGORY.IMMIGRATION)) :
          ghostArray;
        return format('Immigration', '/immigration', posts);
      },
      family: (state) => {
        const posts = state.posts && state.posts.length >= 0 ?
          state.posts
            .filter(p => p.categories.includes(CATEGORY.FAMILY)) :
          ghostArray;
        return format('Family', '/family', posts);
      },
    }),
  },
}
</script>

<style scoped>
  .panel-block{
    text-align: initial;
  }
  .icon{
    margin: 0px 5px;
  }
  .panel{
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  }
</style>
