import { Card } from 'ui-kit'
import { ProductsType } from 'types'
import classNames from 'classnames'
import './ProductList.scss'

type TProductListProps = {
  className?: string
  products: ProductsType[]
}

export const ProductList = ({ className, products }: TProductListProps) => {
  return (
    <div className={classNames('products', className)}>
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.cover}
          cardTitle={product.name}
          cardBody={product.body}
          cardTypography='product'
          cardStyle='image'
          price={product.price.toString()}
          className='productsItem w-full'
        />
      ))}
    </div>
  )
}
