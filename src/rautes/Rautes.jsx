import { Route } from 'react-router-dom';
import Home from './home/Home';
import Products from './products/Products';
import Seemore from './seemore/Seemore';
import Servic from './servic/Servic';
import ProductInfo from './product-info/ProductInfo';
import Registr from './registr/Registr';
import SignUp from './signup/SignUp';
import Login from './login/Login';

const Routes = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/servic">
                <Servic />
            </Route>
            <Route path="/registr">
                <Registr />
            </Route>
            <Route exact path="/seemore">
                <Seemore />
            </Route>
            <Route exact path="/seemore/products">
                <Products />
            </Route>
            <Route path="/seemore/products/:productId">
                <ProductInfo />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <SignUp />
            </Route>
        </>
    )
}

export default Routes;