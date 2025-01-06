import { deleteAPI, getAPI, postAPI, putAPI } from 'services'

export const getScheduleById = (id: any) => {
  return getAPI(`schedules/${id}`, {})
}

export const getScheduleByMonth = (params: any) => {
  return getAPI('schedules/monthly', {}, params)
}

export const getScheduleByUserId = (id: any, params: any) => {
  return getAPI(`schedules/user/${id}`, {}, params)
}

export const createSpecialSchedule = (data: any) => {
  return postAPI('schedules/', data)
}

export const monthlySchedules = (data: any) => {
  return postAPI('schedules/monthly', data)
}

export const updateSpecialSchedule = (id: any, data: any) => {
  return putAPI(`schedules/${id}`, data)
}

export const deleteSchedule = (id: any) => {
  return deleteAPI(`schedules/${id}`, {})
}

export const exportSchedule = (params: any) => {
  return getAPI('schedules/download', {}, params, 'arraybuffer')
}