import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { useContext, useState } from 'react'

const Product = (props) => {

    const [isAdding, setisAdding] = useState(false)
    const { product } = props

    const { cart, setCart } = useContext(CartContext)

    const addToCart = (e, product) => {
        e.preventDefault()
        console.log(e, product)

        //    const cart ={
        //        item:{
        //            '1' : 2 ,
        //            '2' : 4
        //        },
        //        totalItem : 6
        //    }

        let _cart = { ...cart }

        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product.id]) {
            _cart.items[product.id] += 1
        } else {
            _cart.items[product.id] = 1
        }

        if (!_cart.items) {
            _cart.items = 0
        }
        _cart.totalItems += 1

        setCart(_cart)
        setisAdding(true)
        setTimeout(() => {
            setisAdding(false)
        }, 1000)
    }

    return (
        <Link to={`/products/${product.id}`}>
            <div>
                <img src="/images/peproni.png" alt="pizza" />
                <div className="text-center">
                    <h2 className='text-lg font-bold py-2'>{product.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <span>$500</span>
                    <button disabled={isAdding} onClick={(e) => { addToCart(e, product) }} className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
                </div>
            </div>
        </Link>

    )
}


export default Product