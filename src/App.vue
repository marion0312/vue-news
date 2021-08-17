<template>
  <div class="container">
    <h1 class="header">The Daily Muggle</h1>
    
    <SearchBar />
    <NewsList />
    <NewContents />

    <NewsDetail />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import NewsList from './components/NewsList.vue'
import NewContents from './components/NewContents.vue'
import NewsDetail from './components/NewsDetail.vue'

export default {
  name: 'App',
  components: {
    SearchBar,
    NewsList,
    NewContents,
    NewsDetail,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.header {
  font-family: 'Times New Roman';
  text-align: center;
}

.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 3em;
  margin-right: 3em;
}
</style>
