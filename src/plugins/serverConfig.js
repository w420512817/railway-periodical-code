const isProd = process.env.NODE_ENV === 'production'
const baseUrl = process.env.VUE_APP_API_URL 
const api = isProd ? baseUrl : 'api/'
export default {
  isProd,
  api
}