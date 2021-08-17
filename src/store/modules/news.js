
const state = {
    news: [],
    countries: [
        
        {
            code: 'ph',
            country: 'Philippines'
        },
        {
            code: 'ae',
            country: 'United Arab Emirates'
        },
        {
            code: 'ar',
            country: 'Argentina'
        },
        {
            code: 'be',
            country: 'Belgium'
        },
        {
            code: 'bg',
            country: 'Bulgaria'
        },
        {
            code: 'br',
            country: 'Brazil'
        },
        {
            code: 'ca',
            country: 'Canada'
        },
        {
            code: 'ch',
            country: 'Switzerland'
        },
        {
            code: 'cn',
            country: 'China'
        },
        {
            code: 'co',
            country: 'Colombia'
        },
        {
            code: 'cu',
            country: 'Cuba'
        },
        {
            code: 'cz',
            country: 'Czechia'
        },
        {
            code: 'de',
            country: 'Germany'
        },
        {
            code: 'eg',
            country: 'Egypt'
        },
        {
            code: 'fr',
            country: 'France'
        },
        {
            code: 'gb',
            country: 'Great Britain'
        },
        {
            code: 'gr',
            country: 'Greece'
        },
        {
            code: 'hk',
            country: 'Hong Kong'
        },
        {
            code: 'hu',
            country: 'HUngary'
        },
        {
            code: 'id',
            country: 'Indonesia'
        },
        {
            code: 'ie',
            country: 'Ireland'
        },
        {
            code: 'il',
            country: 'Israel'
        },
        {
            code: 'in',
            country: 'India'
        },
        {
            code: 'it',
            country: 'Italy'
        },
        {
            code: 'jp',
            country: 'Japan'
        },
        {
            code: 'kr',
            country: 'Korea'
        },
        {
            code: 'lt',
            country: 'Lithuania'
        },
        {
            code: 'lv',
            country: 'Latvia'
        },
        {
            code: 'ma',
            country: 'Morocco'
        },
        {
            code: 'mx',
            country: 'Mexico'
        },
        {
            code: 'my',
            country: 'Malaysia'
        },
        {
            code: 'ng',
            country: 'Nigeria'
        },
        {
            code: 'nl',
            country: 'Netherlands'
        },
        {
            code: 'no',
            country: 'Norway'
        },
        {
            code: 'nz',
            country: 'New Zeland'
        },
        {
            code: 'pl',
            country: 'Poland'
        },
        {
            code: 'pt',
            country: 'Portugal'
        },
        {
            code: 'ro',
            country: 'Romania'
        },
        {
            code: 'rs',
            country: 'Serbia'
        },
        {
            code: 'ru',
            country: 'Russia'
        },
        {
            code: 'sa',
            country: 'Saudi Arabia'
        },
        {
            code: 'se',
            country: 'Sweden'
        },
        {
            code: 'sg',
            country: 'Singapore'
        },
        {
            code: 'si',
            country: 'Slovenia'
        },
        {
            code: 'sk',
            country: 'Slovakia'
        },
        {
            code: 'th',
            country: 'Thailand'
        },
        {
            code: 'tr',
            country: 'Turkey'
        },
        {
            code: 'tw',
            country: 'Taiwan'
        },
        {
            code: 'ua',
            country: 'Ukraine'
        },
        {
            code: 've',
            country: 'Venezuela'
        },
        {
            code: 'za',
            country: 'South Africa'
        },
    ],
    url: '',
    pageNumber: '1',
    selectedNews: []
}

const getters = {
    allCountries: (state) => state.countries,
    allNews: (state) => state.news,
    getUrl: (state) => state.url,
    getPageNumber: (state) => state.pageNumber,
    selectedNewsDetails: (state) => state.selectedNews
}

const actions = {
    async searchNews( {commit}, data ) {
        // console.log(data);
        const url = 'https://newsapi.org/v2/top-headlines?' +
        `q=${data.keyword}&` +
        `country=${data.country}&` +
        `category=${data.category}&` +
        'apiKey=7df9b33f87474d7e9f1439c3a10092ff';

        var req = new Request(url)

        const res = await fetch(req).then( (response) => response.json() )

        commit('setNews', [res.articles, url])
    },
    async fetchNews({commit}) {
        const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=ph&' +
        'apiKey=7df9b33f87474d7e9f1439c3a10092ff';

        var req = new Request(url)

        const res = await fetch(req).then( (response) => response.json() )
        commit('setNews', [res.articles, url])
    },
    async changePage( {commit}, data ) {
        console.log(data.url, data.pageNumber);

        var req = new Request(`${data.url}&page=${data.pageNumber}`)

        const res = await fetch(req).then( (response) => response.json() )
        commit('setNews', [res.articles, data.url])
    },
    setDetails({commit}, data) {
        
        commit("setNewsDetails", data)
    }
}

const mutations = {
    // setCountry: (state, countries) => (  ),
    setNews: (state, data) => {
        state.news = data[0]
        state.url = data[1]
    },
    setPage: (state, page) => ( console.log("test", state, page) ),
    setNewsDetails: (state, data) => ( state.selectedNews = data )
}

export default {
    state, getters, actions, mutations
}