import axios from 'axios'

import { BASE_URL } from '../constants/global'

class HttpUtils {
  static GET = 'get'

  static POST = 'post'

  static finalUrl(url) {
    return `${BASE_URL}${url}`
  }

  static get(url, params, successCallback, failureCallback) {
    return new Promise((resolve) => {
      const finalUrl = HttpUtils.finalUrl(url)
      axios.get(finalUrl, params)
        .then((res) => {
          if (successCallback) {
            successCallback()
          }
          resolve(res.data)
        })
        .catch((err) => {
          if (failureCallback) {
            failureCallback()
          }
          resolve(err)
        })
    })
  }

  static post(url, params, successCallback, failureCallback) {
    return new Promise((resolve) => {
      const finalUrl = HttpUtils.finalUrl(url)
      axios.post(finalUrl, params)
        .then((res) => {
          if (successCallback) {
            successCallback()
          }
          resolve(res.data)
        })
        .catch((err) => {
          if (failureCallback) {
            failureCallback()
          }
          resolve(err)
        })
    })
  }

  static request(method, url, params, successCallback, failureCallback) {
    switch (method) {
      case HttpUtils.GET:
      default:
        return () => HttpUtils.get(url, params, successCallback, failureCallback)
      case HttpUtils.POST:
        return () => HttpUtils.post(url, params, successCallback, failureCallback)
    }
  }
}

export default HttpUtils
