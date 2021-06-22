import React, { useEffect, useState } from 'react'

import '../Style/Pages/Home.scss';

export default function Home() {

    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

    const infographicSrcsArr = ["/Images/exclamationInfographic.png", "/Images/questionInfographic.png", "/Images/votingInfographic.png"];
    const animatedTextsArr = ["התשובה...", "לשאלה הכי גדולה...", "למי מצביעים??"];
    useEffect(() => {
        var newIndex = 0;
        var animationInterval = setInterval(() => {
            console.log("check")
            if (newIndex + 1 === infographicSrcsArr.length) {
                newIndex = 0;
            } else {
                newIndex++;
            }
            setSelectedSlideIndex(newIndex);
        }, 3000);

        return () => {
            clearInterval(animationInterval)
        }
    }, []);

    return (
        <div className="Home">
            <div className="Home--Body">
                <img className="Home--Infographic" src={infographicSrcsArr[selectedSlideIndex]} alt="" />

                <p className="Home--Animated-Text">{animatedTextsArr[selectedSlideIndex]}</p>
                <p className="Home--Intro">
                    לאלה מאיתנו שפחות מבינים ורוצים לדעת במי הכי מתאים להם לבחור.<br />
                    בלי פרסומות, בלי אג’נדה ובלי שטויות.
                </p>
            </div>
            <p className="Copyrights">כל הזכויות שמורות ל- © Oz Herscho </p>
        </div>
    )
}
