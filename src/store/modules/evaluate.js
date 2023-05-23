import { getForm, modifyForm } from '@/api/evaluate'

const actions = {
  getForm({ commit }) {
    return new Promise((resolve, reject) => {
      getForm().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  modifyForm({ commit }, data) {
    return new Promise((resolve, reject) => {
      modifyForm(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  addForm({ commit }, data) {
    return new Promise((resolve, reject) => {
      addForm(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  actions
}
