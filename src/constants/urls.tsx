const baseURL = 'https://api.themoviedb.org/3'

const token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzQyN2Q5NWFjNzRhNzQ4YzIzZDBlMzNmYmEyMTcyZSIsInN1YiI6IjY1ZDhlZDEwMzUyMGU4MDE2M2Q2MmEwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mRyq43zM_eHPjSW6GMHjcp8w-CKMTe8YMTs5YGeJxYk'

const urls = {
    movies: {
        base: '/discover/movie',
        byId:(id:any) => `/movie/${id}`
    },
    genre: {
        base: '/genre/movie/list'
    },
    search: {
        base: '/search/movie'
    }
}

export {
    baseURL,
    urls,
    token
}