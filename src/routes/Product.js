import React from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";

function Product({ dispatch, products }) {
  function onDelete(id) {
    dispatch({ type: "products/delete", payload: id });
  }

  return (
    <div>
      <h2>产品列表</h2>
      <ProductList products={products} onDelete={onDelete} />
    </div>
  );
}

export default connect(({ products }) => ({ products }))(Product);
