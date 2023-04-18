import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const getMobiles = await axios.get('https://63dcfc67df83d549ce97ef20.mockapi.io/mobile')
        setProducts(getMobiles.data)
    }


    useEffect(() => {
        getProducts()
    }, [])

    const handlecart =async(item)=>{
        delete item.id
        delete item.createdAt
        const addcart =await axios.post('https://63f2f6b7de3a0b242b37e08b.mockapi.io/cart',item)
        if(addcart.status===201){
            window.alert("Added")
            window.location.reload()
        }
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                {
                    products.map((item)=>{
                        return  <div className='col-3 mt-3  '>
                        <div class="card bg-light shadow-sm p-3 mb-5 bg-body-tertiary rounded position-relative" >
                            <img src={item.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p className='text-decoration-line-through'>Price   &#x20b9;{item.price}</p>
                                <p className='fw-bolder'>OfferPrice &#x20b9;{item.offerprice}</p>
                                <a href="#" class="btn btn-outline-secondary" onClick={()=>handlecart(item)}>Add To Cart</a>
                            </div>
                            <span class="badge bg-success position-absolute top-0 end-0">BEST SELLER</span>
                        </div>
                    </div>
                    })
                }
               
            </div>

        </div>
    )
}

export default Products