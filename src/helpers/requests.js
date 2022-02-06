const API_KEY="967a4c92cdfdc9dd86649ca9f6afafa0";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchLatestMovies:`/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies:`/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopUpcomingMovies:`/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies:`/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchFantasyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchScienceFictionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchThrillerMovies:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchHistoryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=36`,
}

export default requests;