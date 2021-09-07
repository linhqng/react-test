import axios from 'axios'

import {
  getMethod,
  patchMethod,
  postMethod,
  putMethod,
  deleteMethod,
} from './utils/index'

const AXIOS_CONFIG = {
  baseURL: 'https://5f55a98f39221c00167fb11a.mockapi.io',
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
}

const appAxios = axios.create(AXIOS_CONFIG)

class APIService {
  constructor(instance = appAxios) {
    this.service = instance
    this.get = getMethod
    this.post = postMethod
    this.put = putMethod
    this.patch = patchMethod
    this.delete = deleteMethod
  }

  executeRequest(config) {
    return this.service
      .request(config)
      .then((response) => {
        return response.data ?? {}
      })
      .catch((error) => {
        return error?.error ?? {}
      })
  }
}

export default APIService
