import { useQuery } from '@tanstack/react-query'
import { productActions } from '../services';

interface UseProductsParams {
    filterKey?: string
}

export const useProducts = ({ filterKey }:UseProductsParams) => {
    
    const { isLoading, isError, error, data=[], isFetching } = useQuery({
        queryKey : ['products', { filterKey }],
        queryFn  : ()=> productActions.getProducts({ filterKey }),
        staleTime: 1000 * 60 * 60
    })


    return {
        isLoading, 
        isError,
        error, 
        isFetching, 
        products:data
    }
}
