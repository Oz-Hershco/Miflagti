import React, { useState } from 'react'

import '../Style/Components/Collapsible.scss'

export default function Collapsible(props) {
    
    const [show, setShow] = useState(false)

    return (
        <div className="Collapsible">
            <div style={props.buttonContainerStyle} onClick={() => { setShow(!show) }} className="Collapsible--ButtonContainer">
                <img src={show ? "Images/minus-icon.png" : "Images/plus-icon.png"} className="Collapsible--ButtonIcon" alt="" />
                <p style={props.buttonTextStyle} className={show ? "Collapsible--ButtonText Active" : "Collapsible--ButtonText"}>{props.buttonText}</p>
            </div>
            {
                show ? (
                    <div className="Collapsible--Container">
                        {
                            props.customComponent ?
                                props.customComponent :
                                (
                                    <div className="Collapsible--Content">
                                        <p className="Collapsible--ContentText">{props.text}</p>
                                    </div>
                                )
                        }
                    </div>
                ) : null
            }
            <div>

            </div>
        </div>
    )
}
