const baseUrl = "http://localhost:3000"

export const showUser = (id) => {
    return fetch(`${baseUrl}/user/${id}`)
        .then(resp => resp.json())
        .catch(e => e)
}