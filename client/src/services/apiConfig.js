import axios from 'axios'

let apiURL

const apiURLs = {
  production: 'https://blog-three-musketeers.herokuapp.com/api/posts',
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiURL = apiURLs.development
} else {
  apiURL = apiURLs.production
}

const api = axios.create({
  baseURL: apiURL
})

export default api
