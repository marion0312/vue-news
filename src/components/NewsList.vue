<template>
  <div class="resultData">
      <div v-for="news in allNews" :key="news.articles" class="list">
            <div class="card">
                <div class="card-header">
                    <img :src=news.urlToImage :alt=news.title loading="lazy">
                </div>
                <div class="card-body">
                    <p class="news-publishedDate">{{ news.publishedAt }}</p>
                    <p @click="showDetail(news.urlToImage, news.title, news.author, news.content)" class="news-title">{{ news.title }}</p>
                    <p>{{ news.author }} |  {{ news.source.name }}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'NewsList',
    computed: mapGetters(['allNews']),
    methods: {
        ...mapActions(['fetchNews', 'setDetails']),
        showDetail(imageUrl, title, author, content) {
            
            const data = {
                imageUrl: imageUrl,
                title: title,
                author: author,
                content: content
            }

            document.querySelector(".modal").style.display = "block"

            this.setDetails(data)
        }
    },
    created() {
        this.fetchNews()
    }
}
</script>

<style scoped>
    .resultData {
        display: flex;
        flex-flow: row wrap;
    }
    .list {
        flex: 1 1 300px;
        margin: 1em;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .news-publishedDate {
        color: gray;
    }

    .news-title {
        font-weight: bold;
        cursor: pointer;
    }
</style>