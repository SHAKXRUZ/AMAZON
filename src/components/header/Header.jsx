import c from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { TiLocationOutline } from 'react-icons/ti';
import { GrSearch } from 'react-icons/gr';
import { MdAddShoppingCart } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import Logo from '../../assets/images/logo.png';
import usa_flag from '../../assets/images/usa_flag.jpg';
import { useState } from 'react';
function Header({ isSidebarOpen, setIsSidebarOpen }) {
    const [selectedOption, setSelectedOption] = useState("all");
    const { pathname } = useLocation();
    if (pathname.includes("login")) {
        return
    }
    if (pathname.includes("signup")) {
        return
    }
    return (
        <header className={c.header}>
            <div className={c.header__content__group}>
                <Link className={c.header__logo__link} to={'/home'}>
                    <img className={c.header__logo} src={Logo} alt="logo" />
                </Link>
                <div className={c.location__content__group}>
                    <p className={c.location__content__text}>Deliver to</p>
                    <div className={c.location__icons__div}>
                        <i><TiLocationOutline className={c.location__icons} /></i>
                        <p className={c.location__country}>Uzbekistan</p>
                    </div>
                </div>
                <div className={c.input__content__group}>
                    <select className={c.input__content__select} style={selectedOption.length <= 10 ? { width: selectedOption.length * 14 + "px" } : { width: selectedOption.length * 8 + "px" }} onChange={(e) => { setSelectedOption(e.target.value) }}>
                        <option value="all">All</option>
                        <option value="arts & Crafts">Arts & Crafts</option>
                        <option value="automotive">Automotive</option>
                        <option value="baby">Baby</option>
                        <option value="beauty & Personal Care">Beauty & Personal Care</option>
                        <option value="books">Books</option>
                        <option value="boys' Fashion">Boys' Fashion</option>
                        <option value="computers">Computers</option>
                        <option value="deals">Deals</option>
                        <option value="digital Music">Digital Music</option>
                    </select>
                    <form className={c.form}>
                        <input className={c.header__input} type="text" required minLength={3} />
                        <button type={"submit"} className={c.header__search__btn}><GrSearch /></button>
                    </form>
                </div>
                <div className={c.header__right__content__group}>
                    <Link className={c.usa__flag__content} to={'#'}>
                        <img className={c.usa__flag} src={usa_flag} alt="usa-flag" />
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <div className={c.signin__content}>
                            <p className={c.signin__text}>Hello, sign in</p>
                            <p className={c.signin__title}>Account & Lists</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/login">
                        <div className={c.returns__content}>
                            <p className={c.signin__text}>Returns</p>
                            <p className={c.signin__title}>& Orders</p>
                        </div>
                    </Link>
                    <div className={c.card__content}>
                        <div className={c.card__shop__number}>
                            <p className={c.card__number}>0</p>
                            <i><MdAddShoppingCart className={c.cart__icons} /></i>
                        </div>
                        <p className={c.cart__title}>Cart</p>
                    </div>
                </div>
            </div>
            <div className={c.rautes__menu__title__group}>
                <div className={c.rautes__menu}>
                    <Link to={"#"} style={{ textDecoration: "none" }} onClick={() => { setIsSidebarOpen(true) }}>
                        <p className={c.rautes__menu__title}><BiMenu className={c.header__menu__icons} />All</p>
                    </Link>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <p className={c.rautes__title}>Today's Deals</p>
                    </Link>
                    <Link to="/servic" style={{ textDecoration: "none" }}>
                        <p className={c.rautes__title}>Customer Service</p>
                    </Link>
                    <Link to="/registr" style={{ textDecoration: "none" }}>
                        <p className={c.rautes__title}>Registry</p>
                    </Link>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <p className={c.rautes__title}>Gift Cards</p>
                    </Link>
                    <Link to="#" style={{ textDecoration: "none" }}>
                        <p className={c.rautes__title}>Sell</p>
                    </Link>
                </div>
                <Link to="#" style={{ textDecoration: "none" }}>
                    <p className={c.shop__now}>Shop great deals now</p>
                </Link>
                <Link className={c.sigin__up} to="#" style={{ textDecoration: "none" }}>
                    <p>Sign Up</p>
                </Link>
            </div>
        </header >
    )
}
export default Header;