import { productsApi } from '../../api'
import { sleep } from '../../helpers'
import { Product } from '../interfaces'



interface GetProductsParams {
    filterKey?: string
}
export const getProducts = async({ filterKey }:GetProductsParams):Promise<Product[]> => {

    const params = new URLSearchParams()

    if( filterKey ){
        params.append('category', filterKey)
    }

    await sleep(2)

    const { data } = await productsApi.get<Product[]>(`/products`, { params })
    return data
}



interface GetProductParams {
    idProduct?: string
}
export const getProductById = async({ idProduct }:GetProductParams):Promise<Product> => {

    await sleep(2)

    const { data } = await productsApi.get<Product>(`/products/${idProduct}`)
    return data
}
