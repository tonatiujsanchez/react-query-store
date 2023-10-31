import { Button, Image, Input, Textarea } from '@nextui-org/react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useProductMutation } from '../hooks'

import { Category } from '../interfaces'


interface FormInputs {
    title      : string
    price      : number
    description: string
    category   : string
    image      : string
}

export const NewProduct = () => {

    const { productMutation } = useProductMutation()


    const { control, handleSubmit, watch } = useForm<FormInputs>({
        defaultValues: {
            title: 'Google Pixel 8 Pro',
            price: 899,
            description: 'Celular de Alta Gama',
            image: 'https://m.media-amazon.com/images/I/712JkPUUlRL.jpg',
            category: Category.Electronics,
        }
    })

    const newImage = watch('image')



    const onProductSubmit: SubmitHandler<FormInputs> = (data) => {
        productMutation.mutate(data)
    }

    return (
        <div className="w-full flex-col">
            <h1 className="text-2xl font-bold">Nuevo producto</h1>

            <form
                onSubmit={handleSubmit(onProductSubmit)}
                className="w-full"
            >

                <div className="flex justify-around items-center">

                    <div className="flex-col w-[500px]">

                        <Controller
                            control={control}
                            name="title"
                            render={({ field }) => (
                                <Input value={ field.value } onChange={ field.onChange } className="mt-2" type="text" label="Titulo del producto" />
                            )}
                            rules={{ required: true }}
                        />
                        <Controller
                            control={ control }
                            name="price"
                            rules={{ required: true }}
                            render={({ field })=>(
                                <Input value={ field.value.toString() } onChange={ ( ev )=> field.onChange(+ev.target.value) } className="mt-2" type="number" label="Precio del producto" />
                            )}
                        />
                        <Controller
                            control={control}
                            name="image"
                            rules={{ required: true }}
                            render={({ field })=>(
                                <Input value={ field.value } onChange={ field.onChange } className="mt-2" type="url" label="Url del producto" />
                            )}
                        />
                        <Controller
                            control={ control }
                            name="description"
                            rules={{ required: true }}
                            render={({ field })=>(
                                <Textarea value={ field.value } onChange={ field.onChange } className="mt-2" label="Descripcion del producto" />
                            )}
                        />
                        <Controller
                            control={ control }
                            name="category"
                            rules={{ required: true }}
                            render={({ field })=>(
                                <select value={ field.value } onChange={ field.onChange } className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                                    <option value="men's clothing">Men's clothing</option>
                                    <option value="women's clothing">Women's clothing</option>
                                    <option value="jewelery">Jewelery</option>
                                    <option value="electronics">Electronics</option>
                                </select>
                            )}
                        />


                        <br />
                        <Button 
                            type="submit" 
                            className="mt-2" 
                            color="primary"
                            isDisabled={ productMutation.isPending }
                        >
                            { productMutation.isPending ? 'Creando...' : 'Crear producto' }
                        </Button>
                    </div>

                    <div className="bg-white rounded-2xl p-10 flex items-center" style={{
                        width: '500px',
                        height: '600px',
                    }}>

                        <Image
                            src={ newImage }
                        />
                    </div>

                </div>


            </form>

        </div>
    )
}