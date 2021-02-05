import React, { Component } from 'react';
import "./FAQ.css";
import {Accordion, Card} from 'react-bootstrap';


export default class FAQ extends Component{

    render(){
        return (
            <div className="FAQs">
                <h1 className="FAQs_heading">Häufig gestellte Fragen</h1>
            <div className="FAQs_accordion-wrapper">
                <Accordion className="accordion-body">
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Kann ich Sitzplätze für einen Film buchen, ohne mich anzumelden?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-body">Nein</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Ist Ihr Kino rollstuhlgerecht?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="card-body">Ja, sowohl unsere Eingänge zu den Säälen als auch unsere Kinosääle sind so konzipiert, dass Rollstuhlfahrer|innen das Kino mühelos mit ihren Rollstühlen betreten können.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Bieten Sie auf familienfreundliche Filme an?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="card-body">Unsere Kinoprogramme sind so gestaltet, dass wir Filme für alle Altersgruppen anbieten.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="accordion-card">
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            Wie kann ich Tickets stornieren, die ich bereits bezahlt habe?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="card-body">Um bereits bezahlte Tickets stornieren zu können, müssen Sie sich mit Ihrem Account einloggen, mit dem Sie die Tickets gekauft haben.<br></br>
                                Klicken Sie nun auf den Pfeil, der neben Ihrem Benutzernamen erscheint. Nun haben Sie die Möglichkeit, Ihr Konto unter dem Menüpunkt <strong>"Mein Konto"</strong> einzusehen. <br></br>
                                Dort finden Sie eine Übersicht der von Ihnen gebuchten Vorstellungen. Um eine Buchung zu sornieren, müssen sie lediglich auf den dafür vorgesehenen Button klicken und die Stornierung bestätigen. <br></br>
                                Anschließend erhalten Sie einen Gutschein im Wert von dem stornierten Betrag.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            </div>
        )
    }
}