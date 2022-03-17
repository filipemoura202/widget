import axios from 'axios'
import FeedbacksService from './feedbacks'

type ApiType = {
  [name: string]: string;
}

const API_ENVS: ApiType = {
  production: 'https://backend-treinamento-vue3-one.vercel.app',
  development: '',
  local: 'http://localhost:3000'
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV] || API_ENVS.local
})

httpClient.interceptors.response.use(response => response, error => {
  const canThrowAnError = error.request.status === 500 || error.request.status === 0

  if (canThrowAnError) {
    throw new Error(error.message)
  }

  return error
})

export default {
  feedbacks: FeedbacksService(httpClient)
}
