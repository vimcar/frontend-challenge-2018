import React from 'react'

import Item from '../item'

import './ItemsList.css'

const ItemsList = ({items}) =>
    <div className='items'>
    {
        items.map(item => <Item {...item} key={item.id} />)
    }
    </div>

export default ItemsList
