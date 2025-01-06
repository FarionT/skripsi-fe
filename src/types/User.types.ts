export type TUser = {
  id: string
  user_registration_number: string
  full_name: string
  nick_name: string
  email?: string
  phone_number?: string
  birthplace?: string
  dob?: string
  inauguration_year?: string
  address?: string
  province?: string
  city?: string
  district?: string
  sub_district?: string
  postal_code?: string
  mass_coordination_flag?: string
  mass_coordination_type?: string
  preferential_schedules?: string
  active: boolean
  status?: string
  role?: TRole
  is_pwd_resetted?: boolean
}

export type TRole = {
  id: string
  name: string
  level: number
}

export type TProdeacon = {
  id: string
  full_name: string
  nick_name: string
  email: string
  active?: boolean
  phone_number: string
  dob: string
  inauguration_year: string
  birthplace: string
  address: string
  province: string
  city: string
  district: string
  sub_district: string
  zipcode: string
  status: string
  formatted_status?: string
  mass_coordination_flag?: boolean
  mass_coordination_type: string
  preferential_schedules: number[]
  preferential_church?: string
  user_registration_number: string
}

export type TProdeaconsDetail = {
  id: string
  user_registration_number: string
  name: string
  nick_name: string
}
