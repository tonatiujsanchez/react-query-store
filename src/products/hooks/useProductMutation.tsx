import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productActions } from '../services'
import { Product } from '../interfaces'



export const useProductMutation = () => {

    const queryCliente = useQueryClient()
    
    const productMutation =  useMutation({

        onMutate: ( product ) => {
            
            // Optimistic Product
            const optimisticProduct = { ...product, id: Math.random() }

            // Almacenar en el cache del queryClient
            queryCliente.setQueryData<Product[]>(
                ["products",{filterKey: product.category }],
                ( oldData ) => oldData ? [...oldData, optimisticProduct] : [ optimisticProduct ] 
            )

            return { optimisticProduct }
        },
        mutationFn: productActions.createProduct,
        onSuccess: ( product:Product, _variables, context ) => {
      
            // queryCliente.invalidateQueries({
            //     queryKey: ["products",{"filterKey": data.category }]
            // })

            queryCliente.removeQueries({
                queryKey: ["product",{idProduct:context?.optimisticProduct.id.toString()}],
            })
            
            queryCliente.setQueryData<Product[]>(
                ["products",{filterKey: product.category }],
                ( oldData ) => oldData 
                    ? oldData.map( productCache => productCache.id === context?.optimisticProduct.id ? product : productCache ) 
                    : [ product ]
            )
        },
        onError: ( error, _variables, context ) => {            
            queryCliente.removeQueries({
                queryKey: ["product",{idProduct:context?.optimisticProduct.id.toString()}],
            })
            queryCliente.setQueryData<Product[]>(
                ["products",{filterKey: context?.optimisticProduct.category }],
                ( oldData ) => oldData
                    ? oldData.filter( productState => productState.id !== context?.optimisticProduct.id )
                    : []

            )
            console.error( error.message )            
        }
    })
    
    return {
        productMutation
    }
}
