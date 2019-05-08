const baseUrl = "https://evening-journey-12406.herokuapp.com/"

export const showUserProfile = (id) => {
  return fetch(`${baseUrl}/users/${id}`)
    .then(resp => resp.json())
    .catch(e => e)
}

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`${baseUrl}/auth/login`, opts)
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

export const putUserRatings = (id, item) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
  return fetch(`${baseUrl}/users/${id}`, opts)
    .then(resp => resp.json())
    .catch(e => e)
}

export const destroyUser = (id) => {
  const opts = {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
  return fetch(`${baseUrl}/users/${id}`, opts)
    .catch(e => e)
}