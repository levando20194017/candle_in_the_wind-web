import React from 'react'
import Slider from "react-slick";
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
require("dotenv").config();

export default function Product() {
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            process.env.REACT_APP_DB_URL + '/products/' ,
        );
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container">
            <div className="section-item">
                <h2> Candle </h2>
                <Slider {...settings}>
                    {
                        data.map(value => {
                            console.log(value)
                            if (value?.catalog?.name == "candle") {
                                return (
                                    <div className="item text-center">
                                        <Link to={`/products/${value._id}`}>
                                            <div className="item-img">
                                                <img alt="" src={"https://working-admin.azurewebsites.net" + value?.avatar[0]?.url} />
                                            </div>

                                        </Link>
                                        <div>
                                            <p className="mt-3"> {value.name} </p>
                                            <p className="text-danger"> {value.price}  VNĐ</p>
                                            <button className="btn btn-dark mb-3">Add to cart</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Slider>
            </div>

            <div className="section-item">
                <h2> Scented wax </h2>
                <Slider {...settings}>
                    {
                        data.map(value => {
                            console.log(value)
                            if (value?.catalog?.name == "scented wax") {
                                return (
                                    <div className="item text-center">
                                        <div className="item-img">
                                            <img alt="" src={process.env.REACT_APP_DB_URL + value?.image[0]?.url} />
                                        </div>
                                        <div>
                                            <p className="mt-3"> {value.name} </p>
                                            <p className="text-danger"> {value.price}  VNĐ</p>
                                            <button className="btn btn-dark mb-3">Add to cart</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Slider>
            </div>

            <div className="section-item">
                <h2> Essential oil </h2>
                <Slider {...settings}>
                    {
                        data.map(value => {
                            console.log(value)
                            if (value?.catalog?.name == "essential oil") {
                                return (
                                    <div className="item text-center">
                                        <div className="item-img">
                                            <img alt="" src={process.env.REACT_APP_DB_URL + value?.image[0]?.url} />
                                        </div>
                                        <div>
                                            <p className="mt-3"> {value.name} </p>
                                            <p className="text-danger"> {value.price}  VNĐ</p>
                                            <button className="btn btn-dark mb-3">Add to cart</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Slider>
            </div>

            <div className="section-item">
                <h2> Decorations </h2>
                <Slider {...settings}>
                    {
                        data.map(value => {
                            console.log(value)
                            if (value?.catalog?.name == "decoration") {
                                return (
                                    <div className="item text-center">
                                        <div className="item-img">
                                            <img alt="" src={process.env.REACT_APP_DB_URL + value?.image[0]?.url} />
                                        </div>
                                        <div>
                                            <p className="mt-3"> {value.name} </p>
                                            <p className="text-danger"> {value.price}  VNĐ</p>
                                            <button className="btn btn-dark mb-3">Add to cart</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </Slider>
            </div>

        </div>



    )
}
