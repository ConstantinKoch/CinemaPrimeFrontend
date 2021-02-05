import React, { Component } from 'react';
import "./CoronaPage.css";

export default class CoronaPage extends Component{

    render(){
        return(
            <div className="informationen_div">
                                    <h2>Kino Informationen</h2>

                <div className="corona_content-text">
                <div className="corona_text">
                    <p>
                        <strong>Öffnungszeiten:</strong><br></br>
                        So - Do: 16:00 - 22:30 <br></br>
                        Fr - Sa: 15:00 - 24:00</p>
                        <p>
                        <strong>Ticketpreise:</strong><br></br>
                        Erwachsener: 12 € <br></br>
                        Kinder (0 - 14 Jahre): 12 € <br></br>
                        Studenten: 12 € <br></br>

                        Senioren (ab 65 Jahren): 12 € </p>
                </div>
            </div>

            <div className="corona_content-text">
                <div className="corona_text">
                    <h2>Corona News</h2>
                    <p>
                        Liebe CinemaPrime Gäste,<br></br>
                        seit den ersten Nachrichten über den Ausbruch von COVID-19 („Coronavirus“) haben wir 
                        alles getan, um Ihnen ein qualitativ hochwertiges, angenehmes und vor allem sicheres 
                        Kinoerlebnis zu bieten.</p><p>
                    Da die Gesundheit unserer Kunden und Mitarbeiter für uns oberste Priorität hat, und wir uns an 
                    die aktuellen Vorgaben des Bundesgesundheitsministeriums, 
                    der Landesregierungen sowie des Robert-Koch-Instituts halten, haben wir alle unsere Kinos 
                    deutschlandweit vorrübergebend geschlossen.</p><p>
                    Wir werden alles tun, um auch unsere Mitarbeiter vor den finanziellen Auswirkungen 
                    der Schließung zu schützen.</p><p>
                    Online gekaufte Tickets erstatten wir innerhalb von 14 Tagen automatisch auf das beim Ticketkauf genutzte 
                    Zahlungsmittel. Im Kino gekaufte Tickets können nach Wiederöffnung im Kino getauscht oder 
                    zurückgegeben werden.</p>
                    Folgen Sie uns bitte weiter auf unseren Social Media Kanälen und abonieren Sie unseren Newsletter
                    für Updates.<p>
                    Wir wünschen Ihnen und allen unseren Mitarbeitern in diesen schwierigen Zeiten alles Gute 
                    und danken Ihnen für Ihre Unterstützung.</p>
                    Wir freuen uns darauf, Sie bald wieder in einem unserer Kinos begrüßen zu dürfen!<p></p>
                </div>
            </div>
            </div>
        )
    }
}