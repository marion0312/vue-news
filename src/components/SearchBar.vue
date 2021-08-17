<template>
    <div >
        <form class="searchContainer" @submit.prevent="filterData">
            <input class="form-control" v-model="keyword" id="keyword" type="text" placeholder="Keyword">

            <select class="form-control" v-model="country" id="country">
                <option :value="country.code" v-for="country in allCountries" v-bind:key="country.code">{{ country.country }}</option>
            </select>

            <select class="form-control" v-model="category" id="category">
                <option disabled selected value="">Category</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>

            <button type="submit">Search</button>
        </form>

        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SearchBar',
    data() {
        return {
            keyword: '',
            category: '',
            country: 'ph'
        }
    },
    computed: mapGetters(['allCountries']),
    methods: {
        ...mapActions(['changeCountry', 'searchNews']),
        filterData() {
            const data = {
                keyword: this.keyword,
                category: this.category,
                country: this.country
            }
            
            this.searchNews(data)
        }
    }
}
</script>

<style scoped>
    .searchContainer {
        display: flex;
        flex-flow: row wrap;
    }

    .searchContainer > * {
        flex: 1 1 200px;
        margin: 1em;
    }

    .form-control {
        padding: 0.5em;
        border: 1px solid rgb(172, 172, 172);
        border-radius: 7px;
    }

    button {
        border: 1px solid lightskyblue;
        background-color: lightskyblue;
        color: white;
        border-radius: 7px;
        padding: 0.5em;
    }

    button:hover {
        border: 1px solid rgb(98, 149, 180);
        background-color: rgb(98, 149, 180);
    }

    label {
        font-weight: bold;
    }
</style>