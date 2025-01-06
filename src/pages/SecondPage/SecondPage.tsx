
import { ProductList } from 'components'
import { products } from 'utils/getMockData'
import './SecondPage.scss'

const SecondPage = () => {
  return (
    <div className='container mx-auto p-2 lg:px-10'>
      <h1>Welcome to the Second page !</h1>
      <ProductList products={products}/>

    </div>
  )
}

export default SecondPage
