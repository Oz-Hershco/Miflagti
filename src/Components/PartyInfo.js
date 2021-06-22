import React from 'react'

import '../Style/Components/PartyInfo.scss';
export default function PartyInfo(props) {
    return (
        <div className="PartyInfo">
            <div className="PartyInfo--Header">
                <div>
                    <p className="PartyInfo--Title">{props.title}</p>
                    <p className="PartyInfo--Subtitle">{props.subtitle}</p>
                </div>
                {
                    props.customHeaderComponent ?
                    props.customHeaderComponent: null
                }
            </div>
            <div className="PartyInfo--Body">{props.description}</div>
        </div>
    )
}
