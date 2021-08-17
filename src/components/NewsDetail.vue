<template>
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close" @click="closeModal">&times;</span>
    <p class="title">{{ selectedNewsDetails.title }}</p>
    <p class="author">{{ selectedNewsDetails.author }}</p>
    <div class="image-container">
        <img :src="selectedNewsDetails.imageUrl" alt="">
    </div>
    <p class="content">{{ selectedNewsDetails.content }}</p>
  </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'NewsDetail',
    computed: mapGetters(['selectedNewsDetails']),
    methods: {
        closeModal() {
            document.querySelector(".modal").style.display = "none"
        }
    },
    created() {
        console.log(this.selectedNewsDetails);
    }
}
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 1em auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.image-container {
    width: 50vw;
    margin: 1em auto;
}

img {
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    margin: 1em auto;
}

.title {
    font-size: 2em;
    font-weight: bold;
}

</style>