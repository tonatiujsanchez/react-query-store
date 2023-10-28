import { ProductList } from ".."
import { useProducts } from "../hooks"
import { Category } from "../interfaces"

export const WomensPage = () => {

    const { isLoading, products } = useProducts({ filterKey: Category.WomenSClothing })

    if ( isLoading ) {
        return ( 
            <p>Cargando...</p>
        )
    }

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Productos para mujeres</h1>

            <ProductList products={ products } />

        </div>
    )
}