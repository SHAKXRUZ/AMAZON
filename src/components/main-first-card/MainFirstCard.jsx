import c from './MainFirstCard.module.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
const MainFirstCard = ({ title, cardImages, linkTitle, cardImage }) => {
    return (
        <>
            <Link to="/seemore" className={c.card__link}>
                <div className={c.card__content}>
                    <h2 className={c.card__title}>{title}</h2>
                    <div className={c.card}>
                        {
                            cardImages ? cardImages.map(item =>
                                <div key={uuidv4()} className={c.card_images}>
                                    <img className={c.card__fo__images} src={item.image} alt="images" />
                                    <p className={c.card__images__subtitle}>{item.subtitle}</p>
                                </div>
                            ) : <img className={c.card__image} src={cardImage} alt="images" />
                        }
                    </div>
                    <p className={c.link__title}>{linkTitle}</p>
                </div>
            </Link>
        </>
    )
}
export default MainFirstCard