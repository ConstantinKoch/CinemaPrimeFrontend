import React, { Component } from 'react';
import "./FAQ.css";
import {Accordion, Card} from 'react-bootstrap';


export default class FAQ extends Component{

    render(){
        return (
            <div className="faq_content-text">
                <div className="faq_text">
            <div className="FAQs">
                <h1 className="FAQs_heading">Häufig gestellte Fragen</h1>
            <div className="FAQs_accordion-wrapper">
                <Accordion className="accordion-body">
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Kann ich Sitzplätze für einen Film buchen, ohne mich anzumelden?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-body">Nein, eine Registrierung ist aber in 2 Minuten erledigt.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Ist Ihr Kino rollstuhlgerecht?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="card-body">Ja, sowohl unsere Eingänge zu den Sälen als auch 
                            unsere Kinosäle sind so konzipiert, dass Rollstuhlfahrer/innen das Kino mühelos 
                            betreten können.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Bieten Sie auch familienfreundliche Filme an?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="card-body">Unser Kinoprogramm sind so gestaltet, 
                            dass wir zu jeder Zeit Filme für alle Altersgruppen anbieten.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Wie kann ich Tickets stornieren, die ich bereits bezahlt habe?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="card-body">Um bereits bezahlte Tickets stornieren zu können, 
                            müssen Sie sich mit Ihrem Account einloggen, mit dem Sie die Tickets gekauft haben.<br></br>
                                Nun haben Sie die Möglichkeit, Ihr Konto unter dem Menüpunkt 
                                <strong> "Mein Konto"</strong> einzusehen. <br></br>
                                Dort finden Sie eine Übersicht der von Ihnen gebuchten Vorstellungen. 
                                Um eine Buchung zu stornieren, müssen sie nur auf den <strong>"Stornieren"</strong>-Button 
                                klicken und die Stornierung bestätigen. <br></br>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            </div>
            </div>
            </div>
        )
    }
}