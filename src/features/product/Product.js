import React, { useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux"
import { getProducts } from './ProductSlice';

const Product = () => {
  const dispatch = useDispatch();
  useEffect( () =>{
    dispatch(getProducts())
  },[])
  const products = useSelector(data => {
    return data.product.value
  });
  return (
    <div>{products?.map(item => <div>{item.name} </div>)} </div>
  )
}

export default Product