import React, { useEffect, useState } from "react";
import { Button, Card, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    //dispatch an action fro fetchProducts
    dispatch(getProducts());

    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  }, []);
  if (status === "loading") {
    return <Spinner animation="border" variant="primary" />;
  }
  if (status === "error") {
    return <Alert key="danger">Someting went wrong! Try again later</Alert>;
  }

  const addToCart = (product) => {
    // dispatch an add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "130px", width: "100px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white">
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>product Dashboard</h1>
      <div className="row"> {cards}</div>
    </>
  );
};

export default Product;
