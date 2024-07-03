export const getGames = () => {
    return fetch(`http://localhost:8088/games`).then((res) => res.json())
}

export const getAllGames = () => {
    return fetch(`http://localhost:8088/games?_expand=difficulty&_expand=console&_expand=popularity&_expand=playerCount&_expand=genre`).then( res => res.json())
}

export const getGameById = (gameId) => {
    return fetch(`http://localhost:8088/games/${gameId}?_expand=difficulty&_expand=console&_expand=popularity&_expand=playerCount&_expand=genre`).then(res => res.json())
}

export const addGame = (game) => {
    return fetch(`http://localhost:8088/games`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  })
}

export const editGame = (game) => {
    return fetch(`http://localhost:8088/games/${game.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
  })
}

export const deleteGame = (id) => {
    return fetch(`http://localhost:8088/games/${id}`, {
        method: "DELETE"
})
}