import React, { useState, useEffect } from 'react'
import Card from '../Components/Card';
import PartyInfo from '../Components/PartyInfo';
import PopUp from '../Components/PopUp';

import '../Style/Pages/Parties.scss';

export default function Parties() {

    const [parties, setParties] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const [selectedModalPartyData, setSelectedModalPartyData] = useState(null);
    const [show, setShow] = useState(false);

    var searchedParties = parties.filter(party => party.name.includes(searchVal) || searchVal.length === 0);

    const handleClose = () => setShow(false);
    const handleShow = (partyId) => {
        var selectedParty = parties.filter(party => party.id === partyId)[0];
        setSelectedModalPartyData(selectedParty);
        setShow(true);
    };


    useEffect(() => {
        getParties();
    }, []);
    function getParties() {
        fetch('http://localhost:3001/parties')
            .then(response => {
                return response.text();
            })
            .then(data => {
                var partiesData = JSON.parse(data);
                setParties(partiesData);
                setSelectedModalPartyData(partiesData[0]);
            });
    }

    var partyInfoComp = () => {
        var xButtonComp = (
            <div onClick={handleClose} className="PartyInfo--CloseContainer">
                <span>סגירה</span>
                <img src="/Images/x-icon.png" alt="" />
            </div>
        )
        return (<PartyInfo title={selectedModalPartyData.name} subtitle={selectedModalPartyData.founded} description={selectedModalPartyData.description} customHeaderComponent={xButtonComp} />)
    }
    console.log("parties: ", parties)
    return (
        <div className="Parties">
            <div>
                <div className="Parties--Header">
                    <p>מפלגות</p>
                    <p>מִפְלָגָה היא תנועה פוליטית השואפת להשיג שליטה מלאה או חלקית במוסדות הממשל או הפרלמנט. פעולת ההצטרפות למפלגה נקראת התפקדות.</p>
                </div>
                <div className="Parties--Body">
                    <div className="Parties--SearchContainer">
                        <img className="Parties--SearchIcon" src="/Images/search-icon.png" alt="" />
                        <input value={searchVal} onChange={(e) => { setSearchVal(e.currentTarget.value) }} placeholder="איזו מפלגה אתם מחפשים?" className="Parties--SearchInput" type="text" name="search" />
                    </div>
                    <div className={searchedParties.length ? "Parties--CardsContainer" : "Parties--CardsContainer Centered"}>
                        {
                            searchedParties.length ?
                                (
                                    searchedParties.map((party, i) => {
                                        return (<Card onClick={() => { handleShow(party.id) }} key={i} name={party.name} />)
                                    })
                                ) :
                                (
                                    <span>אויי, לא הצלחנו למצוא את מה שחיפשתם... נסו משהו אחר</span>
                                )
                        }
                    </div>
                </div>
                {
                    selectedModalPartyData ?
                        (
                            <PopUp component={partyInfoComp} show={show} handleClose={handleClose} />
                        ) : null
                }
            </div>
            <p className="Copyrights">כל הזכויות שמורות ל- © Oz Herscho </p>
        </div>
    )
}
