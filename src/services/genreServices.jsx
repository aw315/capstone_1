export const getGamesByGenreId = (genreId) => {
    return fetch(`http://localhost:8088/games?${genreId}`).then((res) => res.json())
}

export const getAllGenres = () => {
    return fetch(`http://localhost:8088/genres`).then((res) => res.json())
}