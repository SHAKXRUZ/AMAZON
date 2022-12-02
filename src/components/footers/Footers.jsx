import c from "./Footers.module.css";
import footersData from '../../Footers.json';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from "react-router-dom";
const Footers = () => {
    const { pathname } = useLocation();
    if (pathname.includes("login")) {
        return
    }
    if (pathname.includes("signup")) {
        return
    }
    return (<div className={c.footers}>
        <div className={c.footers__text__content}>
            {
                footersData.map(data => (
                    <div className={c.footers__card} key={uuidv4()}>
                        <Link style={{ textDecoration: "none", textDecorationColor: "#999999" }} to={"#"}>
                            <p className={c.footers__title}>{data.title}</p>
                            <p className={c.footers__text}>{data.text}</p>
                        </Link>
                    </div>))
            }
        </div>
        <div className={c.footers__last__text__group}>
            <div className={c.footers__contact__group}>
                <p className={c.contact}>Conditions of Use</p>
                <p className={c.contact}>Privacy Notice</p>
                <p className={c.contact}>Interest-Based Ads</p>
            </div>
            <p className={c.amazon__year}>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>)
}
export default Footers;