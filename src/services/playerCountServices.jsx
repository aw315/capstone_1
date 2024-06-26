export const getGamesByPlayerCountId = (playerCountId) => {
    return fetch(`http://localhost:8088/games?${playerCountId}`).then((res) => res.json())
}

export const getAllPlayerCounts = () => {
    return fetch(`http://localhost:8088/playerCounts`).then((res) => res.json())
}