import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

import '../Style/Pages/Faqs.scss';

export default function Faqs() {

    const [faqs, setFaqs] = useState([]);
    const [collapsedIndex, setCollapsedIndex] = useState(0);

    useEffect(() => {
        getFAQs();
    }, []);
    function getFAQs() {
        fetch('http://localhost:3001/faqs')
            .then(response => {
                return response.text();
            })
            .then(data => {
                setFaqs(JSON.parse(data));
            });
    }

    return (
        <div className="Faqs">
            <div>
                <div className="Faqs--Header">
                    <p>על הבחירות</p>
                    <p>הבחירות לכנסת הן ליבה של שיטת הממשל בישראל, שהיא דמוקרטיה פרלמנטרית, שיטה שבה סמכותו של השלטון, הממשלה, נובעת מן האמון שמביעה בו הכנסת (הפרלמנט הישראלי), שנבחרה על ידי אזרחי המדינה.</p>
                </div>
                <div className="Faqs--Body">
                    <Accordion onSelect={(selectedIndex) => { setCollapsedIndex(selectedIndex) }} className="Faqs--Accordion" defaultActiveKey="0">
                        {
                            faqs.map((faq, i) => {
                                return (
                                    <Card key={i}>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey={faq.id}>

                                                <div className="Collapsible--ButtonContainer">
                                                    <img src={collapsedIndex === faq.id ? "Images/minus-icon.png" : "Images/plus-icon.png"} className="Collapsible--ButtonIcon" alt="" />
                                                    <p className={collapsedIndex === faq.id ? "Collapsible--ButtonText Active" : "Collapsible--ButtonText"}>{faq.question}</p>
                                                </div>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={faq.id}>
                                            <Card.Body>{faq.answer}</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
            <p className="Copyrights">כל הזכויות שמורות ל- © Oz Herscho </p>
        </div>
    )
}
