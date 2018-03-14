import React, {Component} from 'react'
import classNames from 'classnames'

import Spacer from '../spacer'

import './Item.css'

class Item extends Component {
    constructor() {
        super()

        this.state = {
            isHovered: false
        }

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleMouseOver() {
        this.setState({
            isHovered: true
        })
    }

    handleMouseLeave() {
        this.setState({
            isHovered: false
        })
    }

    render() {
        const {name, imageSrc, imageSrc2x} = this.props
        const {isHovered} = this.state
        
        const itemPhotoClass = classNames(
            'item__photo',
            {'item__photo--hovered': isHovered}
        )
        const itemPhotoImageClass = classNames(
            'item__photo__image',
            {'item__photo__image--hovered': isHovered}
        )
        const itemImageSrc = isHovered ? imageSrc2x : imageSrc

        return <Spacer top={1} left={1} right={1} bottom={3}>
            <div className='item' onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                <div className={itemPhotoClass}>
                    <img src={itemImageSrc} className={itemPhotoImageClass} alt={name} />
                    {isHovered &&
                        <div className='item__photo__cover cover'>
                            <a className='cover__link' href='#'>Add to Cart</a>
                        </div>
                    }
                </div>

                <Spacer top={2} left={2} right={2}>
                    {name}
                </Spacer>
            </div>
        </Spacer>
    }
}

export default Item