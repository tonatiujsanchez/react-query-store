import { useQuery } from '@tanstack/react-query'
import { productActions } from '../services'

interface UseProductParams {
    idProduct: string
}

export const useProduct = ({ idProduct }:UseProductParams) => {

    const { isLoading, isError, error, data, isFetching } = useQuery({
        queryKey : ['product', { idProduct }],
        queryFn  : ()=> productActions.getProductById({ idProduct }),
        staleTime: 1000 * 60 * 60
    })


    return {
        isLoading,
        isFetching,
        isError,
        error,
        product:data
    }
}
