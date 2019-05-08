// const baseUrl = "https://evening-journey-12406.herokuapp.com/"
const baseUrl = "http://localhost:3000"

export const showUserProfile = (id) => {
  const opts = {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
  return fetch(`${baseUrl}/users/${id}`, opts)
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

export const putUserRatings = (user_id, id, item) => {
  const opts = {
    method: 'PUT',
    body: JSON.stringify({rating: item} ),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
  console.log(opts);
  
  return fetch(`${baseUrl}/users/${user_id}/ratings/${id}`, opts)
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