import React from "react"

const textContent = [
  {
    title: "Thema",
    text: "Dieser Text klärt über das Thema der Website auf. Es soll um den \
          öffentlichen Raum in unseren Kiezen - also in unseren direkten\
          Wohnumgebungen gehen. Man kann sich diesem Thema auf viele\
          verschiedene Arten und Weisen nähern, wir haben uns für eine nicht\
          falchlich diskursive, dafür aber persönliche und emotionale\
          entschieden. Wollen das Thema nicht (nur) politisch, soziologisch,\
          raum - planerisch oder datenanalytisch betrachten, sondern die ganz\
          subjektiven und mitunter auch intimen Empfindungen und Erfahrungen von\
          Menschen betrachten, um es uns zu erlauben zu träumen statt zu\
          diskutierne. Im Rahmen des Projektes haben wir die Chance genutz und\
          beginnen mit einem alltäglichen Szenario: Ich nehme meinen Schlüssel\
          und stecke den Geldbeutel ein, werfe noch einmal einen Blick in den\
          Spiegel und nach - dem ich die Schuhe angezogen habe verlasse ich die\
          Wohnung - auf dem Weg zur Uni, zur Arbeit oder nur einen Spaziergang\
          machen. Ich gehe die Treppe runter und verlasse das Haus. Was ist\
          dort? Was sehe ich, was rieche ich, was höre ich, was spüre ich?",
  },
  {
    title: "Hier und jetzt",
    text: "Neben oft unausgesprochenen Träumen gibt es auch ausformulierte\
            Visionen mit dem Anspruch wirksam zu werden. In diesem Kapitel soll es \
            um eine dieser Visionen gehen - die Kiezblöcke. Wir wollen nicht allzu\
            viele Details über das Konzept verlieren und nicht zu technisch\
            werden, sondern Interessieren Besucher:innen zeigen, dass diese Vision\
            gib. Dieses Kapitel soll als ein Apell fungieren die eigenen Träume\
            einzubringen, selbst visionär zu sein und sich zu beteiligen. Die\
            Karte kann helfen Kontakt zu den einzelnen Initiativen in Berlin\
            herzustellen.",
  },
  {
    title: "Traum",
    text: "Wie schaut der Spaziergang durch deinen Stadtteil aus, wenn Du deine Haustüre auf machst und alles, was du dort erlebst, kannst du selbst gestalten? - Dein eigener Kieztraum - Was siehst Du, was hörst du ?, was riechst du? - Wen oder was triffst du auf deinem Weg? Und vor allem, was machen diese Erlebnisse mit dir?\
            Auch das haben wir die selben Berliner*innen gefragt und sie gebeten ihre Erlebnisse auf der Karte rechts einzutragen. ---> hier kommt der switch button hin Realität/Traum",
  },
  {
    title: "Qualität",
    text: "Als nächstes soll es daum gehen sich mit den Qualitäten und\
            Unzulänglichkeiten der öffentlichen Räume in Berlin zu beschäftigen.\
            In unserem Workshop haben wir mit den Teilnehmer:innen über Chancen\
            und Risiken, Stärken und Schwächen des öffentlichen Raums gesprochen.\
            Außerdem haben wir einige Personen in Interviews nach Orten gefragt\
            die sie als besonders gut oder schlecht gelungene öffentliche Räume\
            bezeichnen würden. Wir wollen darüber schreiben was diese Qualitäten\
            sind und auf der Karte zeigen wo sie zu finden sind.",
  },
  {
    title: "Vision",
    text: "Neben oft unausgesprochenen Träumen gibt es auch ausformulierte\
            Visionen mit dem Anspruch wirksam zu werden. In diesem Kapitel soll es\
            um eine dieser Visionen gehen - die Kiezblöcke. Wir wollen nicht allzu\
            viele Details über das Konzept verlieren und nicht zu technisch\
            werden, sondern Interessieren Besucher:innen zeigen, dass diese Vision\
            gib. Dieses Kapitel soll als ein Apell fungieren die eigenen Träume\
            einzubringen, selbst visionär zu sein und sich zu beteiligen. Die\
            Karte kann helfen Kontakt zu den einzelnen Initiativen in Berlin\
            herzustellen.",
  },
  { title: "Zum Projekt", text: "Lorem Ipsum" },
]

const Content = ({ activeContent }) => {
  return ( 
    <>
      <div>
        <h2>{textContent[activeContent].title}</h2>
        <p>{textContent[activeContent].text}</p>
      </div>
    </>
  )
}

export default Content
