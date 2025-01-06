import { getAPI, putAPI } from 'services'

export const getAllChurches = () => {
  return getAPI('churches', {})
}

export const getChurchById = (id: any) => {
  return getAPI(`churches/${id}`, {})
}

export const updateChurch = (id: any, data: any) => {
  return putAPI(`churches/${id}`, data)
}