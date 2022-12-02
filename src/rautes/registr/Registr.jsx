import c from './Registr.module.css';
import { Link } from 'react-router-dom';
import mainImages from '../../assets/images/registr__main__img.jpg';
import registrData from '../../Registr.json';
const Registr = () => {
    return (
        <div className={c.registr}>
            <div className={c.registr__header}>
                <Link className={c.registr__header__text1} to="#"><p className={c.registr__header__text1}>registry & gifting</p></Link>
                <p className={c.registr__header__text2}>Find a registry or gift list</p>
                <p className={c.registr__header__text2}>Create a registry or gift list</p>
                <p className={c.registr__header__text2}>Help</p>
            </div>
            <img className={c.registrHeaderImages} src={"https://m.media-amazon.com/images/G/01/home/awr/2022Projects/HGL_2022/Banner_RegistryHomepage-1500x100_EN-V2._CB605654592_.jpg"} alt="sell-header-images" />
            <div className={c.registr__main}>
                <img className={c.registr__main__images} src={mainImages} alt="main-images" />
                <p className={c.registr__main__title}>Find a registry or gift list</p>
                <form className={c.registr__form}>
                    <input className={c.registr__input} minLength={3} type="text" placeholder='Search by Registrant name' required />
                    <select className={c.registr__select}>
                        <option>Wedding Registry</option>
                        <option>Baby Registry</option>
                        <option>Gift List</option>
                    </select>
                    <button className={c.registr__btn}>Search</button>
                </form>
            </div>
            <p className={c.gift__amazon__title}>Reasons to create a registry or gift list on Amazon</p>
            <div className={c.registr__gift__amazon}>

                {
                    registrData.map(data =>
                        <div>
                            <div className={c.gift__cards}>
                                {
                                    data.gift.map(res =>
                                        <div className={c.gift__card__group}>
                                            <img className={c.gift__img} src={res.img} alt="gift-images" />
                                            <p className={c.gift__title}>{res.title}</p>
                                            <p className={c.gift__text}>{res.text}</p>
                                        </div>
                                    )
                                }
                            </div>
                            <p className={c.gift__amazon__title}>Learn more about our different registries and gift lists</p>
                            <div className={c.list__media}>
                                <div className={c.list__cards}>
                                    {
                                        data.list.map(respons =>
                                            <div className={c.list__card__group}>
                                                <img className={c.list__img} src={respons.images} alt="list-images" />
                                                <div className={c.list__card__footer}>
                                                    <p className={c.list__text}>{respons.text}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Registr;