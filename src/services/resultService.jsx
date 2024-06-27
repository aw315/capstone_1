let playerCountLikeString = ""
//for singular platform
export const getSinglePlatformResultsByIds = (genreId, popularityId, difficultyId, playerCountId, consoleId) => {

    if(playerCountId === 4){
        playerCountLikeString = `1|2|4`
    } else {
        playerCountLikeString = playerCountId
    }
        return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId_like=(?:${playerCountLikeString})&consoleId=${consoleId}&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
}
// for all consoles - no restrictions on consoleId
export const getAllPlatformsResultsByIds = (genreId, popularityId, difficultyId, playerCountId) => {
    if(playerCountId === 4){
        playerCountLikeString = `1|2|4`
    } else {
        playerCountLikeString = playerCountId
    }
        return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId_like=(?:${playerCountLikeString})&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
}

//for consoleId 6
export const getResultsByConsoleId6 = (genreId, popularityId, difficultyId, playerCountId) => {
    if(playerCountId === 4){
        playerCountLikeString = `1|2|4`
    } else {
        playerCountLikeString = playerCountId
    }
    return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId_like=(?:${playerCountLikeString})&consoleId_like=(?:6|1|2|3)&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
}

//for consoleId 7
export const getResultsByConsoleId7 = (genreId, popularityId, difficultyId, playerCountId) => {
    if(playerCountId === 4){
        playerCountLikeString = `1|2|4`
    } else {
        playerCountLikeString = playerCountId
    }
    return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId_like=(?:${playerCountLikeString})&consoleId_like=(?:7|2|3)&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
}

//for consoleId 8
export const getResultsByConsoleId8 = (genreId, popularityId, difficultyId, playerCountId) => {
    if(playerCountId === 4){
        playerCountLikeString = `1|2|4`
    } else {
        playerCountLikeString = playerCountId
    }
    return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId_like=(?:${playerCountLikeString})&consoleId_like=(?:8|1|3)&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
}

//for consoleId 9
export const getResultsByConsoleId9 = (genreId, popularityId, difficultyId, playerCountId) => {
    if(playerCountId === 4){
        playerCountLikeString = `1|2|4`
    } else {
        playerCountLikeString = playerCountId
    }
    return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId_like=(?:${playerCountLikeString})&consoleId_like=(?:9|2|1)&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
}


export const getResultById = (resultId) => {
    return fetch(`http://localhost:8088/results/${resultId}`).then(res => res.json())
} 

export const addResult = (result) => {
    return fetch (`http://localhost:8088/results/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result),
    }).then((res) => {
        return res.json()
    }).then((data) => {
        return data.id
    })
}

//various fetch calls - that would check for true false