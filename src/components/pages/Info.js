import React from "react"
// import styled from "styled-components"

// const Footnote = styled.div`
//   color: #9b9b9b;
// `

const Info = () => {
  return (
    <>
      <div>
        <h3>Info</h3>
        <p>
          Die Daten für die Website basieren auf dem Onlineworkshop [T]räume
          deinen Kiez frei vom 08.12.21 sowie auf Interviews. Der Workshop stand
          allen Berliner:innen offen und fand am 08.12.21 statt. Es nahmen 17
          Berliner:innen daran teil. Im Rahmen des Workshops konnten die
          Teilnehmenden ihre subjektive Perspektive auf ihre unmittelbare
          Wohnumgebung in Berlin teilen, sowohl in Bezug auf dem Status quo,
          sowie für ihre Träume und Visionen. Die Datengenerierung geschah durch
          individuelle Eintragungen der Teilnehmenden auf einer Onlinekarte
          sowie im Rahmen von Notizen bei Gruppendiskussionen.{" "}
        </p>{" "}
        <p>
          <a
            href="https://github.com/aeschi/gatsby-mapbox-kiezblocks/tree/main/src/data"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hier ist der Link
          </a>{" "}
          zu den gesammelten Daten im CSV-File Format. Die Interviews wurden mit
          Immo Janssen, Alexander Dziekan und Till Steinmeier durchgeführt.
          Thema der Interviews war insbesondere welche good practice sowie bad
          practice Beispiele es für eine Bewohner:innen freundliche Gestaltung
          der öffentlichen Raums in Berlin gibt.
        </p>
        <h5>ÜBER DAS PROJEKT</h5>
        {/* <Footnote> */}
        <p>
          Das Projekt wurde in Kooperation mit {""}
          <a
            href="https://changing-cities.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Changing Cities e.V.
          </a>{" "}
          durchgeführt. Rund die Hälfte der Workshop-Teilnehmenden sowie alle
          drei Interviewten sind Teil des Changing City Netzwerkes oder sind
          damit assoziiert. Es wurden Anstrengungen unternommen, dass auch
          Teilnehmende außerhalb dieses Netzwerkes am Workshop teilnehmen und es
          ein ausgewogenes Geschlechter- und Altersverhältnis besteht.
          <br />
          <br />
          Das Projekt wurde am 31.03.2022 auf dieser Website veröffentlicht und
          entstand im Rahmen {""}
          <a
            href="https://uclab.fh-potsdam.de/mapping/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapping Cities - Making Cities Seminar
          </a>{" "}
          bei Prof. Dr. Marian Dörk an der Fachhochschule Potsdam im
          Wintersemester 2021/22.
          <br />
          <br />
          Entwickelt und durchgeführt wurde das Projekt [T]räume deinen Kiez
          frei von Anna Eschenbacher (Schwerpunkt: Web Development & Design),
          Kalen Harris (Workshopdesign & Strategy), Leonie Schatter (Design &
          Usability), Oskar Schmieg (Kartographie, Raumsoziologie &
          Visualisierung) und Jonas Harant (Workshopdesign & Kommunikation).
          <br />
          <br />
          Vielen Dank an alle Beteiligten!
        </p>
        {/* </Footnote> */}
      </div>
    </>
  )
}

export default Info
