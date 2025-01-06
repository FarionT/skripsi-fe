import { TMassSchedule, TMassScheduleList } from './Mass.types'

export type TChurch = {
  name: string
  parish: string
  address: string
  province: string
  city: string
  district: string
  sub_district: string
  zipcode: string
  mass_schedule: TMassSchedule[]
}

export type TChurchProdeacon = {
  name: string
  parish: string
  address: string
  province: string
  city: string
  district: string
  sub_district: string
  zipcode: string
  mass_schedule: TMassScheduleList[]
}

export type TChurchStatus = {
  status: string
  count: number
}