import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import StoreCandle from "./store.candle";
import StoreScentedWax from "./store.scented-wax";
import StoreEssentialOil from "./store.essential-oil";
import StoreDecoration from "./store.decoration";
import axios from "axios";
import { useEffect, useState } from "react";
require("dotenv").config();

export default function Store(props) {
  const [status, setStatus] = useState(0);
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(process.env.REACT_APP_SERVER_URL + "/products/");
    setData(result.data);
  });

  const displayCheck = () => {
    if (status === 0) {
      return <StoreCandle data={data} />;
    } else if (status === 1) {
      return <StoreScentedWax data={data} />;
    } else if (status === 2) {
      return <StoreEssentialOil data={data} />;
    } else {
      return <StoreDecoration data={data} />;
    }
  };

  return (
    <div>
      <Header />
      <div className="container page-title">
        <p className="text-center py-4">Store</p>
      </div>

      <div className="text-center my-5">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setStatus(0)}
          >
            Candle
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setStatus(1)}
          >
            Scented wax
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setStatus(2)}
          >
            Essential oil
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setStatus(3)}
          >
            Decoration
          </button>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mb-5">
          {displayCheck()}
        </div>
      </div>

      <Footer />
    </div>
  );
}
