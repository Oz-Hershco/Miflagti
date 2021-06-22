import React from 'react'

import '../Style/Pages/About.scss';

export default function About() {

    const redirectToPortfolio = () => window.open(
        'http://ozhershco.me/',
        '_blank'
    );

    return (
        <div className="About">
            <div className="About--Body">
                <div className="About--PictureContainer">
                    <img src="/Images/profilepic.jpg" alt="profile" />
                </div>
                <p className="About--Title">קצת עליי אבל בעיקר על האתר 😉</p>
                <p className="About--Paragraph">
                    שמי הוא עוז הרשקו. אני מפתח אתרים שפשוט החליט ליצור את האתר הזה כדי לעזור לאנשים בידיוק כמוני,
                    שלא מבינים בפוליטיקה בכלל, להבין מה זה בכלל בחירות ולמי כדאי להצביע.
                    חשוב לי לציין שאין לאתר הזה שום מטרה לשכנע אתכם למי להצביע כחלק מאינטרס פוליטי כזה או אחר.
                    האתר קיים כדי לעזור לכם להחליט למי הכי כדאי לכם להצביע, על בסיס העקרונות והאמונות האישיים שלכם.
                </p>
                <p className="About--Paragraph">בלי שום קשר אם מעניין אתכם, אתם מוזמנים להציץ בתיק עבודות שלי 🧙</p>
                <p onClick={redirectToPortfolio} className="About--PortfolioButton">לאתר פורטפוליו</p>
            </div>
            <p className="Copyrights">כל הזכויות שמורות ל- © Oz Herscho </p>
        </div>
    )
}
