import c from './Main.module.css';
import mainFirstData from '../../MainFirstCard.json';
import { v4 as uuidv4 } from 'uuid';
import MainFirstCard from '../main-first-card/MainFirstCard';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
const Main = () => {
    const sliderCardData = [
        "https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/811ftjOO5FL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61CJaHZI6cL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81TMvHnKlwL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71FVbHHW+AL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/91K20PnjefL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81yYivG7NzL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/91tBaQgfHeL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81xT2mdyL7L._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61CJaHZI6cL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71wiGMKadmL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/91U+WcDQfkL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61CJaHZI6cL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81QWIhOnoML._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/91WyMdm13iL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/81m6us1KNaL._AC_SY200_.jpg"
    ];
    const g = useRef();
    const [SliderBtn, setSliderBtn] = useState(0);
    let left = () => {
        if (SliderBtn > 0) {
            setSliderBtn(SliderBtn - 400);
        }
    };
    let right = () => {
        if (SliderBtn < sliderCardData.length * 400) {
            setSliderBtn(SliderBtn + 400);
        }
    }
    useEffect(() => {
        g.current.scrollLeft = SliderBtn;
    }, [SliderBtn]);
    return (
        <main className={c.main}>
            <div className={c.main__first__card__group}>
                {
                    mainFirstData.map(cardItem => {
                        if (cardItem.cardImages) {
                            return <MainFirstCard
                                key={uuidv4()}
                                title={cardItem.title}
                                cardImages={cardItem.cardImages}
                                linkTitle={cardItem.linkTitle}
                            />
                        }
                        return <MainFirstCard
                            key={uuidv4()}
                            cardImage={cardItem.cardImage}
                            title={cardItem.title}
                            linkTitle={cardItem.linkTitle}
                        />
                    }
                    )
                }
            </div>
            <div className={c.carusel}>
                <button className={c.carusel__right} onClick={right}>
                    <MdArrowForwardIos />
                </button>
                <div className={c.main__carusel__content} ref={g}>
                    {
                        sliderCardData.map((el) => {
                            return (
                                <div key={uuidv4()} className={c.carusel__wrapper}>
                                    <div className={c.carusel__images__group} key={uuidv4()}>
                                        <img className={c.carusel__images} src={el} alt="images" />
                                    </div>
                                </div>
                            )
                        })}
                </div>
                <button className={c.carusel__left} onClick={left}>
                    <MdOutlineArrowBackIosNew />
                </button>
            </div>
            <div className={c.main__footer}>
                <hr className={c.first__line} />
                <div className={c.main__footer__content}>
                    <p className={c.main__footer__title}>See personalized recommendations</p>
                    <p className={c.main__footer__btn}>Sign in</p>
                    <div className={c.main__footer__last__group}>
                        <p className={c.main__footer__last__group__first__text}>New customer?</p>
                        <p className={c.main__footer__last__group__last__text}>Start here.</p>
                    </div>
                </div>
                <hr className={c.last__line} />
            </div>
        </main >
    )
}
export default Main;