import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import LabelSelectInput from '../Components/LabelSelectInput';
import PartyInfo from '../Components/PartyInfo';

import '../Style/Pages/WhoToChoose.scss';

export default function WhoToChoose() {

    const [labels, setLabels] = useState([]);
    const [partyLabels, setPartyLabels] = useState([]);
    const [parties, setParties] = useState([]);
    const [selectedLabels, setSelectedLabels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [bestPartyMatch, setBestPartyMatch] = useState("Initial State");
    const [bestPartyMatchPerc, setBestPartyMatchPerc] = useState(null);

    useEffect(() => {
        getLabels();
        getPartyLabels();
        getParties();
    }, []);

    function getLabels() {
        fetch('http://localhost:3001/labels')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setLabels(JSON.parse(data));
            });
    }

    function getPartyLabels() {
        fetch('http://localhost:3001/partylabels')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setPartyLabels(JSON.parse(data));
            });
    }

    function getParties() {
        fetch('http://localhost:3001/parties')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setParties(JSON.parse(data));
            });
    }

    console.log("labels: ", labels);
    console.log("partyLabels: ", partyLabels);
    console.log("parties: ", parties);

    const handlePartyCheck = () => {
        setIsLoading(true);
        var relatedPartyLabels = [];
        selectedLabels.forEach(selectedLabel => {
            var existingRelatedPartyLabels = partyLabels.filter(partyLabel => partyLabel.label_id === selectedLabel.id)
            if (existingRelatedPartyLabels.length) {
                relatedPartyLabels.push(...existingRelatedPartyLabels)
            }
        });
        parties.forEach(party => {
            var partyIterations = relatedPartyLabels.filter(rpl => rpl.party_id === party.id);
            party.labelIterations = partyIterations.length;
        });
        var closestPartyChoice = parties[0];
        parties.forEach(party => {
            if (party.labelIterations > closestPartyChoice.labelIterations) {
                closestPartyChoice = party;
            }
        });
        var matchPercentage = relatedPartyLabels.length ? (relatedPartyLabels.length / partyLabels.filter(pl => pl.party_id === closestPartyChoice.id).length) : null
        setIsLoading(false);
        setBestPartyMatch(relatedPartyLabels.length ? closestPartyChoice : null);
        setBestPartyMatchPerc((matchPercentage * 100).toString() + '%');
    }

    return (
        <div className="WhoToChoose">
            <div>
                <div className="WhoToChoose--Header">
                    <p>במי לבחור?</p>
                    <p>תחליטו איך הייתם רוצים לראות את המדינה, תבחרו בין האפשרויות ואנחנו ננסה לעזור לכם למצוא כיוון</p>
                </div>
                <div className="WhoToChoose--Body">
                    <LabelSelectInput onSelect={setSelectedLabels} labels={labels} />
                    <div className={selectedLabels.length ? "WhoToChoose--CheckButton" : "WhoToChoose--CheckButton Disabled"}>
                        {
                            isLoading ?
                                (
                                    <Spinner className="LoadingButtonSpinner" animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                ) :
                                (
                                    <p onClick={() => { handlePartyCheck() }} className="WhoToChoose--CheckButtonText">אוקיי אז מה מתאים לי?</p>
                                )
                        }
                    </div>

                    {
                        bestPartyMatch === "Initial State" ? null : (
                            bestPartyMatch ?
                                (
                                    <div className="BestPartyMatchContainer">
                                        <PartyInfo
                                            title={bestPartyMatch.name}
                                            subtitle={bestPartyMatch.founded}
                                            description={bestPartyMatch.description}
                                            customHeaderComponent={
                                                bestPartyMatchPerc ?
                                                    (<p className="PartyMatchPerc">אחוזי התאמה: {bestPartyMatchPerc}</p>) :
                                                    (null)
                                            }
                                        />
                                    </div>
                                ) :
                                (
                                    <p className="NoPartyMatch">אופס! סליחה אבל נראה שהמדינה שאתם מחפשים עדיין לא קיימת...</p>
                                )
                        )
                    }

                </div>
            </div>
            <p className="Copyrights">כל הזכויות שמורות ל- © Oz Herscho </p>
        </div>
    )
}
