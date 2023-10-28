import { FC } from 'react'
import { Card, Image } from '@nextui-org/react'

import { Product } from '../interfaces'

interface Props {
  product: Product
}

export const ProductCard:FC<Props> = ({ product }) => {
  return (
    <Card
      className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        <Image src={ product.image }
          alt="tailwind logo"
          width={300}
          height={400}
          className="rounded-xl p-5 sm:p-0 bg-white" />
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium hidden md:block uppercase text-sm">{ product.category }</p>
        </div>
        <h3 className="font-black text-gray-800 md:text-xl text-lg">{ product.title }</h3>

        <p className="text-gray-500 text-base product-card-description">{ product.description }</p>

        <p className="text-xl font-black text-gray-800">
          ${ product.price }
          <span className="font-normal text-gray-600 text-base"> +impuesto</span>
        </p>
      </div>
    </Card>

  );
}
