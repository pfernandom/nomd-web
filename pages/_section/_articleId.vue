<template>
  <section class="section">
    <div class="container content">
    <h1 class="title is-size-4-mobile">{{article.title}}</h1>
    <div v-html="content" class="content"></div>
  </div>
</section>
</template>

<script>
import { Converter } from 'showdown';
import { mapState } from 'vuex';

export default {
  name: 'Article',
  layout: 'expanded',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      article: 'openArticle',
    }),
    content: function content() {
      return this.converter.makeHtml(this.article.content);
    },
  },
  async fetch({ store, route }) {
    const params = {
      section: route.params.section,
      id: route.params.articleId,
    };
    return store.dispatch('fetchArticle', params);
  },
  beforeCreate() {
    this.converter = new Converter({
      smartIndentationFix: true,
      simpleLineBreaks: true,
    });
  }
};
</script>

<style scoped>
  .content{
    text-align: initial;
  }
  .section{
    min-height: 68vh;
  }
</style>
