import { useState, useEffect } from "react"
import { useParams, useHistory } from 'react-router-dom'

const SingleProduct = () => {

    const [product, setProduct] = useState({})
    const params = useParams()
    // console.log(params)
    const history = useHistory()

   

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params._id}`)
            .then(res => res.json())
            .then(product => {
                setProduct(product)
            })
    }, [params._id])

    return (
        <div className='container mx-auto mt-12'>
            <button className='mb-12 font-bold' onClick={() =>{history.goBack()}}>Back</button>
            <div className='flex'>
                <img src='../images/peproni.png' alt='pizza' />
                <div className='ml-16'>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <div className='text-md'>Small</div>
                    <div className='font-bold mt-2'></div>
                    <div className='font-bold mt-2'>$ 400</div>
                    <button className='bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4'>Add</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct