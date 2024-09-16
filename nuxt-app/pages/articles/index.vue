<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Articles</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-if="loading">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
      <v-col cols="12" v-else-if="error">
        <v-alert type="error">{{ error }}</v-alert>
      </v-col>
      <v-col cols="12" v-else>
        <v-row>
          <v-col v-for="article in articles" :key="article.id" cols="12" md="8">
            <v-card>
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-text>{{ article.content }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="viewArticle(article.id)">Read More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getArticles } from '~/services/api/articles';

export default {
  data() {
    return {
      articles: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await getArticles();
        console.log('Fetched articles:', response);
        this.articles = response.articles;
      } catch (err) {
        this.error = 'Failed to load articles';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
    viewArticle(id) {
      // TODO: add navigation to article view
      console.log('View article:', id);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>