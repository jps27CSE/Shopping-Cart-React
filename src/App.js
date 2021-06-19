import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
import ProductsPage from './pages/ProductsPage'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
function App() {
    return (
        <>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" component={Home} exact ></Route>
                    {/* <Route path="/about" component={About}></Route> */}
                    <Route path="/products" exact component={ProductsPage}></Route>
                    <Route path="/products/:_id" component={SingleProduct}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App