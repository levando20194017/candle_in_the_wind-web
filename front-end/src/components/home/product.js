import React, { useContext } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/Context";
require("dotenv").config();

export default function Product() {
	const [data, setData] = useState([]);
	const {cart, addItemToCart, updateItemFromCart} = useContext(CartContext)

	useEffect(async () => {
		
		const result = await axios(process.env.REACT_APP_SERVER_URL + "/products/");
		setData(result.data);
	});

	const settings = {
		infinite: false,
		dots: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container">
			<div className="section-item">
				<h2> Candle </h2>
				<Slider {...settings}>
					{data.map((value) => {
						// console.log(value);
						if (value?.catalog?.name === "candle") {
							return (
								<div className="item text-center" key={value?._id}>
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
											  console.log(value)
											  console.log("Add")
											}
											
										  }} 
										>Add to cart</button>
									</div>
								</div>
							);
						}
					})}
				</Slider>
			</div>

			<div className="section-item">
				<h2> Scented wax </h2>
				<Slider {...settings}>
					{data.map((value) => {
						// console.log(value);
						if (value?.catalog?.name === "scented wax") {
							return (
								<div className="item text-center" key={value?._id}>
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
											}
											else {
											  addItemToCart({data:value, quantity:1})
											  console.log(value?._id)
											}
											
										  }}
										>Add to cart</button>
									</div>
								</div>
							);
						}
					})}
				</Slider>
			</div>

			<div className="section-item">
				<h2> Essential oil </h2>
				<Slider {...settings}>
					{data.map((value) => {
						// console.log(value);
						if (value?.catalog?.name === "essential oil") {
							return (
								<div className="item text-center" key={value?._id}>
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
											}
											else {
											  addItemToCart({data:value, quantity:1})
											  console.log(value?._id)
											}
											
										  }}
										>Add to cart</button>
									</div>
								</div>
							);
						}
					})}
				</Slider>
			</div>

			<div className="section-item">
				<h2> Decorations </h2>
				<Slider {...settings}>
					{data.map((value) => {
						// console.log(value);
						if (value?.catalog?.name === "decoration") {
							return (
								<div className="item text-center" key={value?._id}>
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
											}
											else {
											  addItemToCart({data:value, quantity:1})
											  console.log(value?._id)
											}
											
										  }}
										>Add to cart</button>
									</div>
								</div>
							);
						}
					})}
				</Slider>
			</div>
		</div>
	);
}
