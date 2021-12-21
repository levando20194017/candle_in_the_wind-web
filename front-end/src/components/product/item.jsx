import React, {useState,useEffect} from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import imgdemo from './avatar.jpg'
import imgdemo1 from './Balsam_and_Cedar_5ba57b31cc.png'
import './item.css'
import axios from 'axios'



const Item = (props) => {
    const [toggle, setToggle] = useState(false)
    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }
    const [quantity, setQuantity] = useState(1)

    
    const [data, setData] = useState([]);

    useEffect(async () => {
        const result = await axios(
            'https://working-admin.azurewebsites.net/products/' + props.match.params.id
        );
        setData(result.data);
    });

    console.log(data?.image?.[0]?.url)
    // const url = `https://working-admin.azurewebsites.net/products/${data.image[0].url}`
    const image = data?.image
    // console.log(image['0'].url)
    
    
    return (
        <div>
            <Header/>
            <div className="itemscreen">
                <div className="itemscreen__left">
                    <div className="left__image">
                        <img src={`https://working-admin.azurewebsites.net${data?.image?.[0]?.url}`} alt="product name" />
                        
                    </div>
                        {/* <div className="left__img__bonus">
                            <img src={imgdemo1} className="active" alt="product name" />
                            <img src={imgdemo} alt="product name" />
                            <img src={imgdemo} alt="product name" />
                            <img src={imgdemo} alt="product name" />
                        </div> */}
                    
                </div>
                <div className="itemscreen__right">
                    <div className="right__info">
                        <p className="right__info__name">{data?.name}</p>
                        <div className="right__info__price">
                            {data?.price} VND
                        </div>
                        {/* <div className="right__info__category">
                            <p>Category</p>
                            <div className="choice">

                                <input type="radio" name="size" value="1" hidden id="#1"/>
                                <label htmlFor="#1" className="size-radio-btn check" onClick={}>#1</label>
                                <input type="radio" name="size" value="2" hidden id="#2"/>
                                <label htmlFor="#2" className="size-radio-btn">#2</label>
                                <input type="radio" name="size" value="3" hidden id="#3"/>
                                <label htmlFor="#3" className="size-radio-btn">#3</label>
                                <input type="radio" name="size" value="4" hidden id="#4"/>
                                <label htmlFor="#4" className="size-radio-btn">#4</label>
                            </div>
                        </div> */}
                        <div className="right__info__qty">
                            {/* Qty
                            <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                ))}

                            </select> */}
                            Quantity 
                            <div className="qtydiv">
                                <div className="qtybox">
                                    <span className="btnqty qtyminus icon icon-minus" onClick={() => setQuantity(pre => pre === 1 ? 1 : pre-1)}>-</span>
                                    <input type="text" id="quantity" name="quantity" value={quantity} min="1" max={data.quantityStock} className="quantity-selector quantity-input"/>
                                    <span className="btnqty qtyplus icon icon-plus" onClick={() => setQuantity(pre => pre+1)}>+</span>
                                </div>
                            </div>
                            
                        </div>
                        <p>
                            <button className="cart-btn" type="button" onClick={()=>{}}>Add to cart</button>
                        </p>
                        <div className="rightscreen__productinfo">
                            <span className="product__info" onClick={toggler}>
                                <i style={{fontSize: '24px'}} className= {toggle ? "fa check" : "fa" }>&#xf0da;</i> Product Infomation
                            </span>
                            
                            <div className="list">
                                {
                                toggle ? <><li>abc</li><li>abc</li><li>abc</li></> : <span></span>
                                }
                                
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
            <div className="description__screen">
                <h2 className="heading">description</h2>
                <p className="des">{data?.description}</p>

            </div>
            <div className="related__screen">
                <h2>Related Products</h2> 
                <div className="related__items">

                    <div className="item text-center">
                        <div className="item-img">
                            <img alt="" src={`https://working-admin.azurewebsites.net${image?.[0]?.url}`} />
                        </div>
                        <div>
                            <p className="mt-3"> Item 1 </p>
                            <p className="text-danger"> 000  VNĐ</p>
                            <button className="btn btn-dark mb-3">Add to cart</button>
                        </div>
                    </div>
                    <div className="item text-center">
                        <div className="item-img">
                            <img alt="" src={`https://working-admin.azurewebsites.net${image?.[0]?.url}`} />
                        </div>
                        <div>
                            <p className="mt-3"> Item 1 </p>
                            <p className="text-danger"> 000  VNĐ</p>
                            <button className="btn btn-dark mb-3">Add to cart</button>
                        </div>
                    </div>
                    <div className="item text-center">
                        <div className="item-img">
                            <img alt="" src={imgdemo1} />
                        </div>
                        <div>
                            <p className="mt-3"> Item 1 </p>
                            <p className="text-danger"> 000  VNĐ</p>
                            <button className="btn btn-dark mb-3">Add to cart</button>
                        </div>
                    </div>
                    <div className="item text-center">
                        <div className="item-img">
                            <img alt="" src={imgdemo} />
                        </div>
                        <div>
                            <p className="mt-3"> Item 1 </p>
                            <p className="text-danger"> 000  VNĐ</p>
                            <button className="btn btn-dark mb-3">Add to cart</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Item
