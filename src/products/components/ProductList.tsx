import { FC } from 'react'
import { ProductCard } from ".."

import { Product } from "../interfaces"


interface Props {
  products: Product[]
}

export const ProductList:FC<Props> = ({ products }) => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">
      {
        products.map( product => (
          <ProductCard key={ product.id } product={ product } />
        ))
      }
    </div>
  )
}