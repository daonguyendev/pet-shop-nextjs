import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import OthersProduct from "../components/shop/OthersProduct";
import ProductDetails from "../components/shop/ProductDetails";
import SingleProductDescription from "../components/shop/SingleProductDescription";

import Layout from "../layout/Layout";

function ShopDetails() {
  const [cartItemDetail, setCartItemDetail] = useState([]);

  useEffect(() => {
    console.log(cartItemDetail)
    if (cartItemDetail != null) {
      axios
        .get(`http://localhost:8080/api/product/${1}`)
        .then(res => {
          setCartItemDetail(res.data);
          console.log(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }, []);

  return (
    <Layout>
      <Breadcrumb pageName="Shop Details" pageTitle="Shop Details" />
      <div className="shop-details-page pt-120 mb-120">
        <div className="container">
          <ProductDetails props={cartItemDetail}/>
          <SingleProductDescription props={cartItemDetail}/>
          <OthersProduct />
        </div>
      </div>
    </Layout>
  );
}

export default ShopDetails;
