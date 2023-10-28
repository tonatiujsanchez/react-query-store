import { ProductList } from ".."
import { useProducts } from "../hooks"
import { Category } from "../interfaces"

export const MensPage = () => {

    const { isLoading, products } = useProducts({ filterKey: Category.MenSClothing })

    if ( isLoading ) {
        return (
            <p>Cargando...</p>
        )
    }

    return (
        <div className="flex-col">
            <h1 className="text-2xl font-bold">Productos para hombres</h1>
            <ProductList products={ products } />
        </div>
    )
}