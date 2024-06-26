export const getGamesByConsoleId = (consoleId) => {
    return fetch(`http://localhost:8088/games?${consoleId}`).then((res) => res.json())
}

export const getAllConsoles = () => {
    return fetch(`http://localhost:8088/consoles`).then((res) => res.json())
}