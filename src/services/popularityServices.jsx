export const getGamesByPopularityId = (popularityId) => {
    return fetch(`http://localhost:8088/games?${popularityId}`).then((res) => res.json())
}

export const getAllPopularities = () => {
    return fetch(`http://localhost:8088/popularities`).then((res) => res.json())
}