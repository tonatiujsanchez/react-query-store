import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productActions } from '../services'
import { Product } from '../interfaces'



export const useProductMutation = () => {

    const queryCliente = useQueryClient()
    
    const productMutation =  useMutation({
        mutationFn: productActions.createProduct,
        onSuccess: ( product:Product ) => {

            // queryCliente.invalidateQueries({
            //     queryKey: ["products",{"filterKey": data.category }]
            // })
        
            queryCliente.setQueryData<Product[]>(
                ["products",{filterKey: product.category }],
                ( oldData ) => oldData ? [...oldData, product] : [ product ]
            )
        }
    })
    
    return {
        productMutation
    }
}
