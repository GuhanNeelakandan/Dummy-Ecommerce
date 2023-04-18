import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import Login from './../images/profile.jpg'
import cart from './../images/cart.png'
import axios from 'axios'

function Topbar() {
    const [modal, setModal] = useState(false)
    const [register, setRegister] = useState(false)
    const [cartItem, setCartItem] = useState(false)
    const [cartList, setcartList] = useState([])

    const toggle = () => {
        setModal(!modal)
    }
    const toggleRegister = () => {
        setRegister(!register)
        setModal(!modal)
    }

    const closeRegister = () => {
        setRegister(!register)
    }

    const toggleCart = () => {
        setCartItem(!cartItem)
    }

    const getCart = async () => {
        const res = await axios.get('https://63f2f6b7de3a0b242b37e08b.mockapi.io/cart')
        setcartList(res.data)
    }

    useEffect(() => {
        getCart()
    }, [cart])


    const removeCart=async(id)=>{
        const res =await axios.delete(`https://63f2f6b7de3a0b242b37e08b.mockapi.io/cart/${id}`)
        if(res.status===200){
            window.alert('Deleted')
            getCart()
        }
    }

    const total = cartList.reduce((prev,curr)=>prev+curr.offerprice,0)
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>

                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='position-relative me-4'>

                            <img src={cart} width='30px' height='30px' className='mx-2' onClick={toggleCart} />
                            <span class="badge bg-success position-absolute top-0 end-0 rounded-pill">{cartList.length}</span>
                        </div>
                        <button className='btn btn-sm btn-outline-primary' onClick={toggle}>Login</button>
                    </div>
                </div>
            </nav>
            <Filter />
            <Modal isOpen={modal} toggle={toggle} size='lg' centered scrollable>
                <ModalHeader>Login</ModalHeader>
                <ModalBody>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={Login} className='img-fluid' />
                            </div>
                            <div className='col-6 align-self-center'>
                                <Form>
                                    <FormGroup>
                                        <Label
                                            for="exampleEmail"
                                            hidden
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label
                                            for="examplePassword"
                                            hidden
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <Button>
                                        Login
                                    </Button><br></br>
                                    <div className='d-flex justify-content-between'>
                                        <a className='text-primary' onClick={toggleRegister}>Craete New Account</a>
                                        <a className='text-danger'>Forgot Password?</a>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <Modal isOpen={register} toggle={closeRegister} size='lg' centered scrollable>
                <ModalHeader>Register</ModalHeader>
                <ModalBody>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={Login} className='img-fluid' />
                            </div>
                            <div className='col-6 align-self-center'>
                                <Form>
                                    <FormGroup>
                                        <Label
                                            for="exampleEmail"
                                            hidden
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label
                                            for="examplePassword"
                                            hidden
                                        >
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                        />
                                    </FormGroup>
                                    {' '}
                                    <Button>
                                        Register
                                    </Button><br></br>
                                    <div className='d-flex justify-content-between'>
                                        <a className='text-primary' onClick={toggleRegister}>Already i have a account</a>
                                        <a className='text-danger' onClick={toggleRegister}>Login</a>
                                    </div>

                                </Form>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <Modal isOpen={cartItem} toggle={toggleCart} size='lg' scrollable>
                <ModalHeader>Cart Item</ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div class="card">
                                    <ul class="list-group list-group-flush">
                                        {
                                            cartList.map((list) => {
                                                return <li class="list-group-item">
                                                    <div className='d-flex justify-content-between'>
                                                        <div>{list.name} - &#x20b9;{list.offerprice}</div>
                                                        <button className='btn btn-sm btn-danger rounded-pill' onClick={()=>(removeCart(list.id))}>x</button>
                                                    </div>
                                                </li>
                                            })
                                        }
                                        <li class="list-group-item bg-secondary text-white">
                                                    <div className='d-flex justify-content-between'>
                                                        <div>Total</div>
                                                        <div>&#x20b9;{total}</div>
                                                    </div>
                                                </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>


    )
}

export default Topbar