import React from 'react'
import Link from 'next/link'

function CardItem(props) {
    return (
        <li className="cards__item">
            <Link className="cards__item__link" href={props.path}>
                <figure className="cards__item__pic-wrap" 
                data-category={props.label}>
                    <div className="img-container">
                        <img 
                        src={props.src} 
                        alt={props.label + " picture"} 
                        className="cards__item__img"
                        />
                    </div>
                </figure>
                <div className='cards_item_info'>
                <h5 className="cards__item__text">{props.text}</h5>

                </div>
            </Link>
        </li>
    )
}

export default CardItem
