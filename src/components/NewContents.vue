<template>
  <div class="container">
      <a @click="prevPage">&lt; Previous</a>
      <a @click="nextPage">Next &gt;</a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
var pageNum = ''

export default {
    name: 'NewContents',
    computed: mapGetters(['getUrl', 'getPageNumber']),
    methods: {
        ...mapActions(['changePage']),
        prevPage() {
            if ( pageNum != 1 ) {
                pageNum-- //Decrease page number

                var data = {
                    url: this.getUrl,
                    pageNumber: pageNum
                }

                this.changePage(data)
            }
            else {
                console.log("Disable");
            }
        },
        nextPage() {
            pageNum++ //Increase page number

            console.log(this.getUrl);

            var data = {
                url: this.getUrl,
                pageNumber: pageNum
            }

            console.log("data", data);

            this.changePage(data)
        }
    },
    created() {
        pageNum = this.getPageNumber
    }
}
</script>

<style scoped>
.container {
    display: flex;
    /* align-content: space-around; */
    justify-content: space-evenly;
    margin-bottom: 2em;
}

a {
    cursor: pointer;
}
</style>