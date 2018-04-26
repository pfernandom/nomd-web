import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import fetch from 'node-fetch';

const graphqlClient = new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({ uri: 'http://localhost:3333/graphql', fetch }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});



export const state = () => ({
    counter: 0,
    posts: [],
    isLoaded: false,
    locales: ['en', 'es'],
    locale: 'en',
    openArticle: {
        title: 'Loading...',
        content: 'Loading...',
    },
});

export const mutations = {
    loadArticles(state, { articles }) {
        state.posts = articles;
    },
    openArticle(state, { article }) {
        state.openArticle = article;
    },
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },
};

export const actions = {
    async fetchArticles({ commit }) {
    //async fetchArticles({ commit }, { categoryCount }) {
        console.log('Geeet');
        const query = gql`
        query articles($locale: String!, $query: ArticleQuery){
            articles(locale: $locale, query: $query){
            id
            title
            locale
            categories
            }
        }
        `;

        const variables = {
            locale: 'en_US',
            query: {},
        };

        const { data } = await graphqlClient.query({ query, variables });
        return commit('loadArticles', data);
    },
    async fetchArticle({ commit }, { id }) {
        const { data } = await graphqlClient.query({
        query: gql`
            query article($id: String!){
                article(id: $id){
                    id
                    title
                    locale
                    categories
                    content
                }
            }
        `,
        variables: { id },
        });
        commit('openArticle', data);
    },
};