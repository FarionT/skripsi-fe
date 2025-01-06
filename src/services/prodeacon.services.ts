import { deleteAPI, getAPI, postAPI, putAPI } from 'services'

export const getAllProdeacon = (params?: any) => {
  return getAPI('users', {}, params)
}

export const getProdeaconById = (id: any) => {
  return getAPI(`users/${id}`, {})
}

export const createProdeacon = (data: any) => {
  return postAPI('users', data)
}

export const updateProdeacon = (id:any, data: any) => {
  return putAPI(`users/${id}`, data)
}

export const deleteProdeacon = (id:any) => {
  return deleteAPI(`users/${id}`, {})
}