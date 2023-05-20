const API_KEY=process.env.REACT_APP_FILM_WEB_API;

const request = {

    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,

    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=horror`,
    fetchRomanceMpvies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,

}
export default request;