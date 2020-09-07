import axios from 'axios'

class HttpUtils {
  static GET = 'get'

  static POST = 'post'

  static finalUrl(url) {
    return `${process.env.API_URL}${url}`
  }

  static get(url) {
    return new Promise((resolve) => {
      const finalUrl = HttpUtils.finalUrl(url)
      axios.get(finalUrl, { withCredentials: true })
        .then(res => resolve(res.data))
        .catch(err => resolve(err.response))
    })
  }

  static post(url, params) {
    return new Promise((resolve) => {
      const finalUrl = HttpUtils.finalUrl(url)
      axios.post(finalUrl, params, { withCredentials: true })
        .then(res => resolve(res.data))
        .catch(err => resolve(err.response))
    })
  }
}

export default HttpUtils
