export const getGamesByDifficultyId = (difficultyId) => {
    return fetch(`http://localhost:8088/games?${difficultyId}`).then((res) => res.json())
}

export const getAllDifficulties = () => {
    return fetch(`http://localhost:8088/difficulties`).then((res) => res.json())
}