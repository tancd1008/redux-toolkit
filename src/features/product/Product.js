import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector((data) => {
    return data.product.value;
  });
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name} </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div>{products?.map(item => <div className='text-lime-700'>{item.name}</div>)} </div>
  );
};

export default Product;
