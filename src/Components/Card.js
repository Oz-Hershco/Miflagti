import React from 'react'

import '../Style/Components/Card.scss';

export default function Card(props) {
    return (
        <div onClick={props.onClick} style={props.cardStyle} className="Card">
            <span style={props.cardTitleTextStyle} className="Card--Title">{props.name}</span>
        </div>
    )
}
