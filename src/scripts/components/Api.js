const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`)
};

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'GET',
      headers: this.headers
    })
    .then(handleResponse)
  }

  getUser() {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: this.headers
    })
    .then(handleResponse)
  }

  editProfile(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
    .then(handleResponse)
  }
  
  addCard(data) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(handleResponse)
  }

  removeCard(idCard) {
    return fetch(`${this.baseUrl}/cards/${idCard}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(handleResponse)
  }

  editAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(handleResponse)
  }

  changeLike(idCard, isLiked) {
    return fetch(`${this.baseUrl}/cards/${idCard}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this.headers,
    })
    .then(handleResponse)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-73',
  headers: {
    authorization: '5b73469a-87bf-4391-a541-bed6d70ce34a',
    'Content-Type': 'application/json'
  }
})

export { api };