import { Dispatch } from '@reduxjs/toolkit'
import { Toast } from 'ui-kit'
import { setChurches, setCoordTypes, setStatuses } from './redux/slice/dropdown.slice'
import { getAllCoordTypes, getAllStatuses } from 'services/global.services'
import { logout } from './slice/login.slice'
import { getAllChurches } from 'services/church.services'

export const getDropdownStatus = async (dispatch: Dispatch, navigate: (path: string) => void) => {
  try {
    const res = await getAllStatuses()
    if (res.status === 200) {
      const statusData = res.data.data
      const statuses = statusData.map((status: any) => ({
        id: status.id,
        title: status.title,
        active: status.active
      }))
      dispatch(setStatuses(statuses))
    } else if (res.status === 401) {
      localStorage.removeItem('key_login')
      localStorage.removeItem('churches')
      localStorage.removeItem('statuses')
      localStorage.removeItem('coordtypes')
      logout()
      navigate('/login')
    } else if (res.status === 404) {
      Toast('Data tidak ditemukan', 'danger', res.data.message)
    } else if ([400, 422].includes(res.status)) {
      Toast('Terjadi Kesalahan', 'danger', res.data.message)
    }
  } catch (error) {
    console.error(error)
  }
}

export const getDropdownChurch = async (dispatch: Dispatch, navigate: (path: string) => void) => {
  try {
    const res = await getAllChurches()
    if (res.status === 200) {
      const churchData = res.data.data
      const churches = churchData.map((church: any) => ({
        id: church.id,
        title: church.name,
      }))
      dispatch(setChurches(churches))
    } else if (res.status === 401) {
      localStorage.removeItem('key_login')
      localStorage.removeItem('churches')
      localStorage.removeItem('statuses')
      localStorage.removeItem('coordtypes')
      logout()
      navigate('/login')
    } else if (res.status === 404) {
      Toast('Data tidak ditemukan', 'danger', res.data.message)
    } else if ([400, 422].includes(res.status)) {
      Toast('Terjadi Kesalahan', 'danger', res.data.message)
    }
  } catch (error) {
    console.error(error)
  }
}

export const getDropdownCoordType = async (dispatch: Dispatch, navigate: (path: string) => void) => {
  try {
    const res = await getAllCoordTypes()
    if (res.status === 200) {
      const coordTypeData = res.data.data
      const coordTypes = coordTypeData.map((coordType: any) => ({
        id: coordType.id,
        title: coordType.title,
      }))
      dispatch(setCoordTypes(coordTypes))
    } else if (res.status === 401) {
      localStorage.removeItem('key_login')
      localStorage.removeItem('churches')
      localStorage.removeItem('statuses')
      localStorage.removeItem('coordtypes')
      logout()
      navigate('/login')
    } else if (res.status === 404) {
      Toast('Data tidak ditemukan', 'danger', res.data.message)
    } else if ([400, 422].includes(res.status)) {
      Toast('Terjadi Kesalahan', 'danger', res.data.message)
    }
  } catch (error) {
    console.error(error)
  }
}
