import request from '@/utils/request'

export function loginByUsername(username, password, code, randomStr) {
  var grant_type = 'password'
  var scope = 'server'
  // const data = {
  //   username,
  //   password,
  //   grant_type: 'password',
  //   scope: 'server',
  //   randomStr: '81401536512542009',
  //   code: 'mygg'
  // }
  return request({
    // url: '/login/login',
    url: '/auth/oauth/token',
    headers: {
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    // data: data
    params: { username, password, randomStr, code, grant_type, scope }
  })
}

// export function logout() {
//   return request({
//     url: '/login/logout',
//     method: 'post'
//   })
// }

export const logout = (accesstoken, refreshToken) => {
  return request({
    url: '/auth/authentication/removeToken',
    method: 'post',
    params: { accesstoken, refreshToken }
  })
}


// export function getUserInfo(token) {
//   return request({
//     url: '/admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function getUserInfo() {
  return request({
    url: '/admin/user/info',
    method: 'get'
  })
}

