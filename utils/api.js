const BASE_API = 'https://yts.lt/api/v2/'

class Api {
    getSuggestions = async (id) => {
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`)
        const {data} = await query.json()
        return data.movies
    }
}

export default new Api()