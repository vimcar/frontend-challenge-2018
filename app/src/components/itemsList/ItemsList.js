import React from 'react'

import Item from '../item'

import './ItemsList.css'

const ItemsList = ({items, onAddItemToCart}) =>
    <div className='items'>
    {
        items.map(item => <Item key={item.id} {...item} onAddToCart={onAddItemToCart} />)
    }
    </div>

export default ItemsList
