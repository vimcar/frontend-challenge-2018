import React from 'react'

import cart from '../../resources/images/cart.svg'

import './Cart.css'

const Cart = ({itemsCount}) =>
    <a href='#' className='cart__link'>
        <img src={cart} className='cart__link__image' alt='Cart' />
        <span className='cart__link__badge'>{itemsCount}</span>
    </a>

export default Cart
