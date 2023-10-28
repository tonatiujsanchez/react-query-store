import { useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useProduct } from "../hooks"
import { ProductCard } from ".."


export const ProductByIdPage = () => {

    const { id } = useParams() as { id: string }

    
    const { product, isLoading } = useProduct({ idProduct: id })

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    if ( isLoading ) {
        return (
            <p>Cargando...</p>
        )
    }

    if( !product ){
        return (
            <Navigate to={'/'} />
        )
    }

    return (
        <div className="w-full mt-5 flex justify-center items-center">
            <ProductCard product={ product } fullDescription />
        </div>
    )
}