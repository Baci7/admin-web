import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/xUser/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/xUser/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/xUser/logout',
    method: 'post'
  })
}
