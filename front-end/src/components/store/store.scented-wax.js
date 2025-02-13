import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/Context";
require("dotenv").config();

export default function StoreScentedWax(props) {
  const data = props.data;
  const {cart, addItemToCart, updateItemFromCart} = useContext(CartContext)
  return data.map((value) => {
    // console.log(value);
    if (value?.catalog?.name === "scented wax") {
      return (
        <div className="col">
          <div className="item text-center">
            <Link to={`/products/${value._id}`}>
              <div className="item-img">
                <img
                  alt=""
                  src={
                    process.env.REACT_APP_SERVER_URL +
                    value?.related_images[0]?.url
                  }
                />
              </div>
            </Link>

            <div>
              <Link to={`/products/${value._id}`}>
                <p className="mt-3"> {value.name} </p>
              </Link>
              <p className="text-danger"> {value.price} VNĐ</p>
              <button 
              className="btn btn-dark mb-3"
              onClick={()=>{
                if (cart.find((prod) => prod?.data?._id === value?._id)){
                  updateItemFromCart(value, 1)
                  console.log(value?._id)
                  console.log("Update")
                }
                else {
                  addItemToCart({data:value, quantity:1})
                  console.log(value?._id)
                  console.log("Add")
                }
                
                }} 
              >Add to cart</button>
            </div>
          </div>
        </div>
      );
    }
  });
}
