import c from './Seemore.module.css';
import seemoredata from "../../Seemore.json"
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import seemore__header from '../../assets/images/seemore_header.png'
const Seemore = () => {
    return (
        <div className={c.seemore}>
            <div className={c.seemore__header}>
                <img className={c.seemore__header__img} src={seemore__header} alt="" />
            </div>
            <div className={c.seemore__card__group}>
                <p className={c.seemore__card__group__title}>Featured Categories</p>
                <div className={c.seemore__cards}>
                    {
                        seemoredata.map(data => {
                            return (
                                <Link className={c.seemore__card} key={uuidv4()} to="/seemore/products">
                                    <img className={c.seemore__card__images} src={data.image} alt="card-images" />
                                    <p className={c.seemore__card__title}>{data.title}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Seemore;