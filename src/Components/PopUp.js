import React from 'react'
import { Modal } from 'react-bootstrap';

import '../Style/Components/PopUp.scss';

export default function PopUp(props) {
    return (
        <Modal className="PopUp" size="lg" centered show={props.show} onHide={props.handleClose}>
            <Modal.Body>
                {
                    props.component ?
                        (props.component()) :
                        (
                            <div>
                                <div className="PopUp--Header">
                                    <div>
                                        <p className="PopUp--Title">{props.title}</p>
                                        <p className="PopUp--Subtitle">{props.subtitle}</p>
                                    </div>
                                    <div onClick={props.handleClose} className="PopUp--CloseContainer">
                                        <span>סגירה</span>
                                        <img src="/Images/x-icon.png" alt="" />
                                    </div>
                                </div>
                                <div className="PopUp--Body">{props.description}</div>
                            </div>
                        )
                }
            </Modal.Body>
        </Modal>
    )
}

