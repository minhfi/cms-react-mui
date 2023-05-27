import { takeLatest, put } from 'redux-saga/effects'
import { AuthenticationUtil } from 'src/utils/authentication.util'
import { StorageUtil } from 'src/utils/storage.util'
import { AUTH_FALLBACK_KEY } from 'src/constants'
import { createBrowserHistory } from 'history'

import {
  AUTH_LOGIN,
  AUTH_SET_CREDENTIALS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS
} from '../types'
import { AuthApi } from 'src/apis'

/**
 * Get user credentials with jwt
 */
// function * getProfile(action: { type: typeof AUTH_GET_PROFILE }) {
//   try {
//     const layout: { sharingToken: string | null } = yield select(state => state.layout)

//     // workaround for promise with generator function
//     const { data: profile }: Awaited<ReturnType<typeof ProfileApi.detail>> = yield ProfileApi.detail()

//     yield put({
//       type: AUTH_SET_CREDENTIALS,
//       value: profile
//     })

//     if (layout.sharingToken) {
//       return browserHistory.push(`/share/view/${layout.sharingToken}`)
//     }
//   } catch (error) {
//     yield put({ type: AUTH_LOGOUT_SUCCESS })
//   }
// }

/**
 * Call login with user credentials
 * @param {object} action
 * @return {Redirect} Go home
 */
function * login(action: { type: typeof AUTH_LOGIN; payload: {email: string; password: string} }) {
  try {
    const history = createBrowserHistory()

    // workaround for promise with generator function
    const { data } = yield AuthApi.login(action.payload)

    yield put({
      type: AUTH_SET_CREDENTIALS,
      value: data.data
    })

    StorageUtil.removeItem(AUTH_FALLBACK_KEY)
    return history.push('/dashboard')
  } catch (error) {
    // MessageService.push({
    //   severity: EMessage.ERROR,
    //   content: getApiErrorMessage(error)
    // })
  }
}

/**
 * Logout, redirect to home, clear credentials
 * @return {Redirect} Go home
 */
function * logout(action: { type: typeof AUTH_LOGOUT }) {
  try {
    yield AuthApi.logout()
    yield put({ type: AUTH_LOGOUT_SUCCESS })
    yield AuthenticationUtil.clear()
  } catch (error) {
    // MessageService.push({
    //   severity: EMessage.ERROR,
    //   content: getApiErrorMessage(error)
    // })
  }
}

export const handler = function * () {
  yield takeLatest(AUTH_LOGIN, login)
  yield takeLatest(AUTH_LOGOUT, logout)
  // yield takeLatest(AUTH_GET_PROFILE, getProfile)
}
