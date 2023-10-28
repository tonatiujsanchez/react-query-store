import { productsApi } from '../../api'
import { Product } from '../interfaces'



interface GetProductsParams {
    filterKey?: string
}
export const getProducts = async({ filterKey }:GetProductsParams):Promise<Product[]> => {

    const params = new URLSearchParams()

    if( filterKey ){
        params.append('category', filterKey)
    }

    const { data } = await productsApi.get<Product[]>(`/products`, { params })
    return data
}
