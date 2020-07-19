import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'

const searchApi = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: Config.TOKEN,
  },
  timeout: 3000,
})

function fetchResults(actions) {
  const params = {
    keywords: actions.keywords || '',
    page: actions.page || 1,
    seed: 1593719324956,
  }
  return searchApi.get(Config.API_URL, { params }).then((response) => {
    if (response.status) {
      console.log('SERVICE fetchResults', params)
      console.log(response.data)
      return response.data
    }

    return null
  })
}

export const userService = {
  fetchResults,
}
