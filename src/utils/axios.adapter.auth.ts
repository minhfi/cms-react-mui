import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AuthenticationUtil } from 'src/utils/authentication.util'
import { AuthApi } from 'src/apis'

/**
 * @typedef {import('axios').AxiosRequestConfig} AxiosRequestConfig
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

/**
 * @param {AxiosRequestConfig} config
 * @returns {AxiosRequestConfig}
 */
const injectAuthorization = (config: AxiosRequestConfig) => {
  const token = AuthenticationUtil.getToken()
  if (token && config.headers) {
    config.headers.authorization = `Bearer ${token}`
  }

  return config
}

/**
 * @param {AxiosResponse} response
 */
const cacheResponseToken = (response: AxiosResponse) => {
  const newAuthorization = response.headers?.authorization
  const { data } = (response as Awaited<ReturnType<typeof AuthApi.login>>).data || {}
  if (newAuthorization) {
    if (data?.accessToken) {
      AuthenticationUtil.setToken(data?.accessToken)
    }
    // if (refreshToken) {
    //   AuthenticationUtil.setToken(undefined, refreshToken)
    // }
  }

  return response
}

const handleErrorResponse = (error: AxiosError) => {
  throw error
}

/**
 * @param {AxiosRequestConfig} config
 * @returns {AxiosResponse}
 */
const handleNormalRequest = (config: AxiosRequestConfig) => {
  injectAuthorization(config)

  return axios
    .create(Object.assign(config, { adapter: defaultAdapter }))
    .request(config)
    .then(response => cacheResponseToken(response))
    .catch(handleErrorResponse)
}

/**
 * Custom axios adapter for cache IPAY
 */
const defaultAdapter = axios.defaults.adapter
axios.defaults.adapter = async function (config) {
  return handleNormalRequest(config)
}
