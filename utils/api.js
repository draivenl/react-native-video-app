const BASE_API = 'https://yts.lt/api/v2/'

class Api {
    getSuggestions = async (id) => {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
        const {data} = await query.json()
        return data.movies
    }
    getMovies = async () => {
        const query = await fetch(`${BASE_API}list_movies.json`)
        const {data} = await query.json()
        return data.movies
    }
    searchMovie = async (title) => {
        const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by_rating&query_term=${title}`)
        const {data} = await query.json()
        return data.movies
    }
}

export default new Api()