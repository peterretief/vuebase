import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
    Authorization: 'Bearer {token}'
  },
  auth: {
      username: 'peter',
      password: 'peter@password'
  }

})
