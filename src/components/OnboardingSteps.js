import React, { useState } from "react"
import ReactJoyride from "react-joyride"
import Button_tour from "../images/buttons/button_tour.svg"

const OnboardingSteps = () => {
  const [joyride, setJoyride] = useState({
    run: false,
    steps: [
      {
        target: "body",
        placement: "center",
        content: (
          <div>
            <h4>
              Willkommen bei <br />
              [T]räume deinen Kiez frei
            </h4>
            <p>
              Hier setzen wir uns damit ausseinander, wie wir den öffentlichen
              Raum wahrnehmen, was uns dort passiert und was wir über ihn
              träumen.
            </p>
          </div>
        ),
        disableBeacon: true,
      },
      {
        target: ".Buttons",
        placement: "right",
        content: (
          <div>
            <p>Hier kannst du dich durch die verschiedenen Kapitel klicken.</p>
          </div>
        ),
        disableBeacon: true,
      },
      {
        target: ".Map",
        // placement: "center",
        content: (
          <div>
            <p>
              Auf unserer Karte siehst du interaktive Datenpunkte. Du kannst
              dich auf der Karte bewegen und Gefühle, Gedanken und Kommentare zu
              den Orten entdecken.
            </p>
          </div>
        ),
        disableBeacon: true,
      },
      {
        target: ".button_tour",
        // placement: "center",
        content: (
          <div>
            <p>
              Falls du nochmal durch die Funktionen geführt werden möchtest,
              kannst du hier klicken.
              <br />
              <h4> Viel Spaß!</h4>
            </p>
          </div>
        ),
      },
    ],
  })

  return (
    <>
      <div style={{ marginLeft: "10%", marginRight: "auto" }}>
        <button
          onClick={() => {
            setJoyride({ ...joyride, run: !joyride.run })
          }}
          style={{
            width: "0px",
            height: "0px",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img src={Button_tour} alt="button_tour" className="button_tour" />
        </button>
      </div>
      <ReactJoyride
        steps={joyride.steps}
        run={joyride.run}
        continuous
        showProgress
        showSkipButton
        styles={{
          options: {
            arrowColor: "#ffffff",
            backgroundColor: "#ffffff",
            // overlayColor: "#5252526a",
            primaryColor: "#E95048",
            textColor: "#000000",
            zIndex: 1000,
            padding: 0,
            textAlign: "left",
          },
        }}
      />
    </>
  )
}

export default OnboardingSteps
