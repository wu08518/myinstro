import axios from 'axios'

const http = {
  async post (url, params) {
    console.log('请求参数 ：', params)
    try {
      const res = await axios.post(url, params)
      console.log('请求响应 ：', res)
    } catch (error) {
      console.info('请求错误 :', error)
    }
  },
  async get (url, params) {
    console.log('请求参数 ：', params)
    try {
      const res = await axios.get(url, params)
      console.log('请求响应 ：', res)
    } catch (error) {
      console.info('请求错误 :', error)
    }
  }
}

export default http
