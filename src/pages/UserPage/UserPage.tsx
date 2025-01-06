import { Breadcrumbs, Headline, Table } from 'ui-kit'
import { useNavigate } from 'react-router-dom'
import { ColumnProps } from 'types'
import './UserPage.scss'

type Data = {
  name: string
  job: string
  location: string
}

const UserPage = () => {
  const navigate = useNavigate()
  const breadcrumbPaths = [
    { path: '/dashboard', name: 'Home' },
    { path: '/dashboard/user', name: 'User' },
  ]

  const data = [
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
    {
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      location: 'Canada',
    },
    {
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      location: 'United States',
    },
    {
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      location: 'China',
    },
  ]
  const columns: Array<ColumnProps<Data>> = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'job',
      title: 'Job',
    },
    {
      key: 'location',
      title: 'Color',

      render: (_, record) => {
        return <div className='text-blue-500 font-bold'>{record.location}</div>
      },
    },
  ]

  const createNewUser = () => {
    navigate('/dashboard/user/create')
  }

  return (
    <div className='container mx-auto py-10 px-2 lg:px-10'>
      <Breadcrumbs className='mb-6' paths={breadcrumbPaths} type='framed' />
      <Headline
        className='mb-6'
        headlineText={'User Page'}
        primaryRightIcon='Add'
        primaryRightText={'hhhh, dd mm yyyy'}
        primaryBtnIcon='Add'
        primaryBtnString={'Add New User'}
        secondaryBtnString={'Upload New User'}
        handlePrimaryBtn={createNewUser}
      />
      <Table 
        className='max-h-[400px]' 
        data={data} 
        columns={columns} 
        tableFilterButton='Add User'
      />
    </div>
  )
}

export default UserPage
