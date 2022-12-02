import c from "./Products.module.css";
import { MdArrowBackIos } from 'react-icons/md';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
const Products = () => {
    const [allProductsData, setAllProductsData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/v2/allproducts")
            .then(response => setAllProductsData(response.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={c.products}>
            <div className={c.products__header}>
                <div className={c.products__header__text__content}>
                    <div className={c.products__header__title__group}>
                        <p className={c.products__header__title}>1-16 of over 1,000 results for</p>
                        <p className={c.products__header__title2}>"nintendo"</p>
                    </div>
                    <select className={c.products__header__select}>
                        <option>Featured</option>
                        <option>Low to High</option>
                        <option>High to Low</option>
                        <option>Customer Review</option>
                        <option>Release Data</option>
                    </select>
                </div>
            </div>
            <div className={c.products__main}>
                <div className={c.products__main__text__content}>
                    <p className={c.text__content__title}>Climate Pledge Friendly</p>
                    <div className={c.checkbox__group}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Climate Pledge Friendly</p>
                    </div>
                    <p className={c.text__content__title}>Department</p>
                    <div className={c.arrow__text}>
                        <MdArrowBackIos />
                        <p className={c.checkbox__text}> Any Department</p>
                    </div>
                    <p className={c.checkbox__text}>PlayStation 5</p>
                    <p className={c.checkbox__text}>PlayStation 4</p>
                    <p className={c.checkbox__text}>Xbox Series X & S</p>
                    <p className={c.checkbox__text}>Xbox One</p>
                    <p className={c.checkbox__text}>Nintendo Switch</p>
                    <p className={c.checkbox__text}>PC</p>
                    <p className={c.checkbox__text}>Mac</p>
                    <p className={c.checkbox__text}>Legacy Systems</p>
                    <p className={c.checkbox__text}>Microconsoles</p>
                    <p className={c.checkbox__text}>Virtual Reality</p>
                    <p className={c.text__content__title1}>Avg. Customer Review</p>
                    <div className={c.star__content}>
                        <div className={c.stars}>
                            <AiFillStar className={c.star__icons} />
                            <AiFillStar className={c.star__icons} />
                            <AiFillStar className={c.star__icons} />
                            <AiFillStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                        </div>
                        <p className={c.star__text}>& Up</p>
                    </div>
                    <div className={c.star__content}>
                        <div className={c.stars}>
                            <AiFillStar className={c.star__icons} />
                            <AiFillStar className={c.star__icons} />
                            <AiFillStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                        </div>
                        <p className={c.star__text}>& Up</p>
                    </div>
                    <div className={c.star__content}>
                        <div className={c.stars}>
                            <AiFillStar className={c.star__icons} />
                            <AiFillStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                        </div>
                        <p className={c.star__text}>& Up</p>
                    </div>
                    <div className={c.star__content}>
                        <div className={c.stars}>
                            <AiFillStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                            <AiOutlineStar className={c.star__icons} />
                        </div>
                        <p className={c.star__text}>& Up</p>
                    </div>
                    <p className={c.text__content__title1}>Featured Brands</p>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Hyperkin</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>PowerA</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Maximum Games</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>PDP</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>HORI</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Merge Games</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Turtle Beach</p>
                    </div>
                    <p className={c.text__content__title1}>Price</p>
                    <p className={c.checkbox__text}>Under $10</p>
                    <p className={c.checkbox__text}>$10 to $15</p>
                    <p className={c.checkbox__text}>$15 to $25</p>
                    <p className={c.checkbox__text}>$25 to $35</p>
                    <p className={c.checkbox__text}>$35 & Above</p>
                    <div className={c.text__btn__group}>
                        <button className={c.text__btn__group__btn}>$ Min</button>
                        <button className={c.text__btn__group__btn}>$ Max</button>
                        <button className={c.text__btn__group__btn2}>Go</button>
                    </div>
                    <p className={c.text__content__title1}>Release Date</p>
                    <p className={c.checkbox__text}>Last 30 days</p>
                    <p className={c.checkbox__text}>Last 90 days</p>
                    <p className={c.checkbox__text}> Coming Soon</p>
                    <p className={c.text__content__title1}>Packaging Option</p>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Frustration-Free Packaging</p>
                    </div>
                    <p className={c.text__content__title1}>Amazon Global Store</p>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Amazon Global Store</p>
                    </div>
                    <p className={c.text__content__title1}>Condition</p>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>New</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Used</p>
                    </div>

                    <p className={c.text__content__title1}>Seller</p>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Amazon.com</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>888Lots</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>SF Planet</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Key Savings</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Cloud_Squall78</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Retailseeker</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>UGREEN GROUP LIMITED</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Focus Camera LLC</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>Adorama</p>
                    </div>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} type={"checkbox"} />
                        <p className={c.checkbox__text}>KFE Trading</p>
                    </div>
                    <p className={c.text__content__title1}>Availability</p>
                    <div className={c.checkbox__group1}>
                        <input className={c.checkbox} checked="checked" type={"checkbox"} />
                        <p className={c.checkbox__text}>Include Out of Stock</p>
                    </div>
                </div>
                <div className={c.products__main__card__content}>
                    {
                        allProductsData.map(product =>
                            <Link className={c.product__link} to={`/seemore/products/${product._id}`} key={product._id}>
                                <div className={c.product__card}>
                                    <img className={c.product__images} src={product?.image[0]?.url} alt="" />
                                    <div className={c.product__card__text__content}>
                                        <h1 className={c.product__title}>{product.name}</h1>
                                        <p className={c.product__ky}>by 2k</p>
                                        <div className={c.product__star__group}>
                                            {
                                                product.ratings % 1 === 0 ?
                                                    new Array(product.ratings).fill("#").map(() =>
                                                        <BsStarFill key={uuidv4()} />
                                                    ) :
                                                    <>
                                                        {
                                                            new Array(Math.floor(product.ratings)).fill("#").map(() =>
                                                                <BsStarFill key={uuidv4()} />
                                                            )
                                                        }
                                                        <BsStarHalf />
                                                    </>
                                            }
                                        </div>
                                        <p className={c.product__switch}>Nintendo Switch</p>
                                        <hr size="1" className={c.product__line} />
                                        <p className={c.product__switch}>Nintendo Switch Digital Code</p>
                                        <div>
                                            <div className={c.product__card__price}>
                                                <sup>$</sup><h2 className={c.product__first__price}>27</h2><sup>00</sup><p className={c.product__price}>$59.99</p>
                                            </div>
                                        </div>
                                        <hr size="1" className={c.product__line} />
                                        <p className={c.product__switch}>PC Online Game Code</p>
                                        <div>
                                            <div className={c.product__card__price}>
                                                <sup>$</sup><h2 className={c.product__first__price}>30</h2><sup>00</sup><p className={c.product__price}>$59.99</p>
                                            </div>
                                        </div>
                                        <p className={c.product__footer__title}>More Buying Choices</p>
                                        <p className={c.product__footer__text}>PlayStation 4 , PlayStation 5 , Xbox One , Xbox One Digital Code , Xbox Series X</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Products;