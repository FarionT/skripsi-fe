import { TProdeaconsDetail, TUser } from './User.types'

export type TMassSchedule = {
  id?: string | null
  day?: string
  time?: string
  quota?: number
  min_mass_coordination_type?: string
  is_deleted?: boolean
}

export type TMassScheduleList = {
  day?: string
  times?: TMassScheduleTime[]
  quota?: number
  min_mass_coordination_type?: string
}

export type TMassScheduleTime = {
  id: string
  time: string
}

export type TMassGenerated = {
    id?: string | null
    mass_name?: string
    date?: string
    time?: string
    quota?: number,
    mass_prodeacon_coordinator?: string
    generated_at?: string
}

export type TMassSpecialScheduleProdeacon = {
  id?: string | null
  mass_coordinator?: boolean
}

export type TMassCalendar = {
  id: string
  date: string
  title: string
  className: string
}

export type TMassCalendarMobile = {
  date: string
  schedules: TMassCalendarMobileDetail[]
}

export type TMassCalendarMobileDetail = {
  id: string
  user_flag: boolean
  mass_name: string
  quota: number
  full_date: string
  time: string
  class_name: string
  church_name: string
  coordinator: TProdeaconsDetail | null
  prodeacons: TProdeaconsDetail[]
}