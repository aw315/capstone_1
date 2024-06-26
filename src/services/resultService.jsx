export const getResultsByIds = (genreId, popularityId, difficultyId, playerCountId) => {
    return fetch(`http://localhost:8088/games?genreId=${genreId}&popularityId=${popularityId}&difficultyId=${difficultyId}&playerCountId=${playerCountId}&_expand=genre&_expand=popularity&_expand=difficulty&_expand=playerCount&_expand=console`).then(res => res.json())
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