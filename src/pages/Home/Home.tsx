import { Accordion, Datepicker, Hero, Stat, Tab, Tabs } from 'ui-kit'
import { products } from 'utils/getMockData'
import { useMenu } from 'utils/getMenu'
import { useMemo, useState } from 'react'
import { About, ProductList } from 'components'
import './Home.scss'

const Home = () => {
  const breadcrumbPaths = [{ path: '/', name: 'Home' }]

  const { menu1 } = useMenu()
  const filteredMenu = useMemo(() => {
    return {
      ...menu1,
      child: menu1.child?.filter((item) => item.name !== 'Dashboard'),
    }
  }, [menu1])

  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)

  const onDateRangeChanged = (startDate: string | null, endDate: string | null) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <>
      <Hero heroType={'centered'} />
      <div className='container mx-auto px-2 lg:px-10'>
        <Datepicker startDate={startDate ? startDate : ''} endDate={endDate ? endDate : ''} placeholder='Test' />
        <Stat className='my-40' />
        <About className='my-40' />
        <ProductList products={products.slice(0, 7)} className='my-40' />
        {/* <Accordions className='my-40'>
          <Accordion title='Helo'>Test Content Accordion 1</Accordion>
          <Accordion leftIcon='Add'>Test Content Accordion 2</Accordion>
          <Accordion>Test Content Accordion 3</Accordion>
        </Accordions> */}
        <Tabs className='my-40'>
          <Tab leftIcon='Add' title='Tab1'>
            Test Content 1
          </Tab>
          <Tab rightIcon='Add' title='Tab2'>
            Test Content 2
          </Tab>
          <Tab title='Tab3'>Test Content 3</Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Home
