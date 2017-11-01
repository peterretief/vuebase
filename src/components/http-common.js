import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8000/api`,
  headers: {
//    Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBldGVyQG9vbWJsaWsuY29tIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJwZXRlciIsImV4cCI6MTUwNjM4OTU0M30.Usj0Nx5C4IJDuwXbqet26-kSdn1QRCfn-AinnR2gf4A'
  }
})
