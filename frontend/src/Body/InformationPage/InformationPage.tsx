import React, { Component } from 'react';
import "./InformationPage.css";
import {Paper, Table, TableBody, TableCell, TableFooter , TableContainer, TableHead, TableRow} from '@material-ui/core';

function createData(name: string, price2d: string, price3d: string) {
    return { name, price2d, price3d};
}

const rows = [
    createData('Erwachsene', '12 €', '15 €'),
    createData('Ermäßigte*', '9 €', '11 €'),
    createData('Kinder (4 - 12 Jahre)', '6 €', '8 €'),
    createData('Rentner', '11 €', '14 €'),
];

export default class InformationPage extends Component{

    render(){
        return(
            <div className="informationen_div">
                <div className="info_content-text">
                <div className="info_text">
                        <h2>Öffnungszeiten:</h2>
                        <p>
So - Do: 16:00 - 22:30 <br></br>
                        Fr - Sa: 15:00 - 24:00</p>
                        <br></br>
                        <h2>
                        Ticketpreise:</h2>
                        <TableContainer className="price_table" component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor:'grey'}}>
            <TableCell></TableCell>
            <TableCell align="right" style={{fontWeight:'bold', color:'white'}}>2D</TableCell>
            <TableCell align="right" style={{fontWeight:'bold', color:'white'}}>3D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{fontWeight:'bold'}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price2d}</TableCell>
              <TableCell align="right">{row.price3d}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="table-footer">
            <TableRow style={{backgroundColor:'lightgrey'}}>
                
            </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    <br></br>
    <strong style={{fontSize: '17px'}}>Am Kino-Dienstag sparen Sie pro Ticket 2€!</strong>
    <br></br> <br></br>
    <p>Kinder unter 4 Jahren haben freien Eintritt</p>
    
    <p style={{fontSize: '13px'}}>* Ermäßigungen gelten für: Schüler, Studenten, Behinderte <br></br>
    nach Vorlage eines gültigen Ausweises </p>
                </div>
            </div>

            <div className="corona_content-text">
                <div className="corona_text">
                    <h2 >Corona News</h2>
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