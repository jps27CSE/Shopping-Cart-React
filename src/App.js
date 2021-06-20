import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigation from './components/Navigation'
import ProductsPage from './pages/ProductsPage'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import { CartContext } from './CartContext.js'
import { useState, useEffect } from 'react'
function App() {

    const [cart, setCart] = useState({})

    useEffect(()=>{
        const cart= window.localStorage.getItem('cart') 
    },[]) 

    return (
        <>
            <Router>
                <CartContext.Provider value={{ name: 'jack pritom' }}>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact ></Route>
                        {/* <Route path="/about" component={About}></Route> */}
                        <Route path="/products" exact component={ProductsPage}></Route>
                        <Route path="/products/:_id" component={SingleProduct}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App