const base = 'http://localhost:3030'
export const login = async (email, password) => {
    let res = await fetch(`${base}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    let jsonResult = await res.json()

    if (res.ok) {
        return jsonResult
    }

    throw(jsonResult)
}

export const getUser = () => {
    let username = localStorage.getItem('username')

    return username
}

export const register = async (email, password) => {
    let res = await fetch(`${base}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })

    let jsonResult = await res.json()

    if (res.ok) {
        return jsonResult
    }

        throw(jsonResult)
}
export const logout = (token) => {
    return fetch(`${base}/users/logout`, {
        headers: {
            'X-Authorization' : token
        }
    })
}