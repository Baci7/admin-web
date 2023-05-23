import request from '@/utils/request'

export function getForm() {
  return request({
    url: '/evaluate/getForm',
    method: 'post'
  })
}

export function modifyForm(form) {
  return request({
    url: '/evaluate/modifyForm',
    method: 'post',
    data: form
  })
}

export function addForm(form) {
  return request({
    url: '/evaluate/addForm',
    method: 'post',
    data: form
  })
}
