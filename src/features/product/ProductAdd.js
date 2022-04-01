import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from './ProductSlice'



const ProductAdd = () => {
    const  {register, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        console.log(data);
        dispatch(addProduct(data))
    }
  return (
    <div>
        <form>

        </form><form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" {...register('name')} placeholder="Ten san pham" />
            <input type="number" {...register('price')} placeholder="Gia san pham"/>
            <button>Them san pham</button>
        </form>
    </div>
  )
}

export default ProductAdd