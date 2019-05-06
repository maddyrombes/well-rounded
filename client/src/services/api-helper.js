const baseUrl = "http://localhost:3000"

export const showUserProfile = (id) => {
  return fetch(`${baseUrl}/users/${id}`)
    .then(resp => resp.json())
    .catch(e => e)
}

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ auth: loginData }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/user_token`, opts)
    .then(resp => resp.json())
    .catch(e => e)
}
  
export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
    'Content-Type': 'application/json'
    }
  } 
  return fetch(`${baseUrl}/users`, opts)
    .then(resp => resp.json())
    .catch(e => e)
}