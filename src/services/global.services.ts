import { getAPI } from 'services'

export const getAllStatuses = (params?: any) => {
  return getAPI('users/options/status', {}, params)
}

export const getAllCoordTypes = (params?: any) => {
  return getAPI('users/options/coord-types', {}, params)
}

export const getDataDashboard = () => {
  return getAPI('users/dashboard', {})
}