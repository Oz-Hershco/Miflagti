import React, { useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import '../Style/Components/LabelSelectInput.scss';
export default function LabelSelectInput(props) {

    const [selectedLabels, setSelectedLabels] = useState([]);

    const handleLabelSelection = (label) => {
        var newLabelsArr = [];
        var doesLabelExist = selectedLabels.filter(lbl => lbl.id === label.id).length;
        //if exists then remove
        if (doesLabelExist) {
            newLabelsArr = selectedLabels.filter(lbl => lbl.id !== label.id);
        }
        //otherwise add 
        else {
            newLabelsArr = selectedLabels;
            newLabelsArr.push(label);
        }
        setSelectedLabels([...newLabelsArr]);
        props.onSelect([...newLabelsArr]);
    }
    console.log("selectedLabels:", selectedLabels)

    return (
        <div className="LabelSelectInput">
            {
                props.labels.map((label, i) => {

                    var doesLabelExist = selectedLabels.filter(lbl => lbl.id === label.id).length;

                    return (
                        <div onClick={() => { handleLabelSelection(label) }} className={doesLabelExist ? "LabelSelectInput-Item Checked" : "LabelSelectInput-Item"} key={i}>
                            <span>{label.name}</span>
                            {
                                label.infoText ?
                                    (
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip id={`label-info-tooltip-${label.id}`} className="LabelSelectInput-Item--InfoCircle--Tooltip"
                                            >{label.infoText}</Tooltip>}
                                        >
                                            <div className="LabelSelectInput-Item--InfoCircle">
                                                <span>?</span>
                                            </div>
                                        </OverlayTrigger>

                                    ) : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
