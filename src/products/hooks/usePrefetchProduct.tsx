import { useQueryClient } from '@tanstack/react-query'
import { productActions } from '../services'



interface PrefectchProductParams {
    idProduct:string
}

export const usePrefetchProduct = () => {
    
    const queryClient = useQueryClient()

    const prefectchProduct = ({ idProduct }:PrefectchProductParams) => {
        queryClient.prefetchQuery({
            queryKey: ['product', { idProduct }],
            queryFn: ()=> productActions.getProductById({ idProduct })
        })
    }

    return {
        prefectchProduct
    }
}
