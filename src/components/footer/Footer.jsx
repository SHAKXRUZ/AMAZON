import c from './Footer.module.css';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from 'react-icons/ai';
import Footer_logo from '../../assets/images/footer_logo.png';
import Usa_flag from '../../assets/images/usa_flag__footer.jpg';
import footerData from '../../Footer.json';
import { v4 as uuidv4 } from 'uuid';
// import { useTranslation } from 'react-i18next';
function Footer() {
    const { pathname } = useLocation();
    if (pathname.includes("login")) {
        return
    }
    if (pathname.includes("signup")) {
        return
    }
    // const { t, i18n } = useTranslation();

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div className={c.footer}>
            <div className={c.footer__back_top}>
                <span onClick={backToTop} className={c.navbar__footer_back_to_top}>Back to top</span>
            </div>
            <div className={c.footer_content}>
                <div className={c.footer__text_content}>
                    {
                        footerData.map(data => (
                            <div className={c.footer__content__card} key={uuidv4()}>
                                <h3 className={c.footer__content__card__title} key={uuidv4()}>{data.title}</h3>
                                {
                                    data.textGroup.map(res => (
                                        <Link key={uuidv4()} style={{ textDecoration: "none" }} to={"#"}>
                                            <p className={c.footer__content__text} key={uuidv4()}>{res.text}</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={c.footer__text_content_media_div}>
                    <ul className={c.footer__media_ul}>
                        <li className={c.footer__text_media_text}>Amazon.com</li>
                        <li className={c.footer__text_media_text}>Your Lists</li>
                        <li className={c.footer__text_media_text}>Find a Gift</li>
                        <li className={c.footer__text_media_text}>Browsing History</li>
                        <li className={c.footer__text_media_text}>Returns</li>
                    </ul>
                    <ul className={c.footer__media_ul}>
                        <li className={c.footer__text_media_text}>Your Orders</li>
                        <li className={c.footer__text_media_text}>Gift Cards & Registry</li>
                        <li className={c.footer__text_media_text}>Your Account</li>
                        <li className={c.footer__text_media_text}>Sell products on Amazon</li>
                        <li className={c.footer__text_media_text}>Your Recalls and Product Safety Alerts</li>
                        <li className={c.footer__text_media_text}>Customer Service</li>
                    </ul>
                </div>
            </div>
            <div className={c.footer__footer_content_group}>
                <div className={c.footer__footer_logo_btn_group}>
                    <Link to={'/footer'}>
                        <img className={c.footer_logo} src={Footer_logo} alt="footer_footer_logo" />
                    </Link>
                    <div className={c.footer__btn_group}>
                        <Link to={'/footer'} style={{ textDecoration: "none" }}>
                            <button className={c.footer_btn}>
                                <i className={c.usd_text}><AiOutlineGlobal /></i>
                                <p className={c.usd_text}>English</p>
                            </button>
                        </Link>
                        <Link to={'/footer'} style={{ textDecoration: "none" }}>
                            <button className={`${c.footer_btn} ${c.btn_language}`}>
                                <p className={`${c.usd_text} ${c.usd}`}>$</p>
                                <p className={c.usd_text}>USD - U.S. Dollar</p>
                            </button>
                        </Link>
                        <Link to={'/footer'} style={{ textDecoration: "none" }}>
                            <button className={c.footer_btn}>
                                <img className={c.usa_flags} src={Usa_flag} alt="usa_flag" />
                                <p className={c.usd_text}>United States</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
