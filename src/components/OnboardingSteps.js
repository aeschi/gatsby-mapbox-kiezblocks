import React, { useState } from "react"
import ReactJoyride from "react-joyride"
import Button_tour from "../images/buttons/button_tour.svg"

const OnboardingSteps = () => {
  const [joyride, setJoyride] = useState({
    run: false,
    steps: [
      {
        title: "1/6",
        target: "body",
        placement: "center",
        content: (
          <div>
            <h4>Willkommen zur Tour von [T]räume deinen Kiez frei</h4>
            <p>
              Was ist der erste Eindruck, wenn Du das Haus verlässt? Es geht um
              öffentlichen Raum, besonders um die Art wie wir ihn wahrnehmen,
              was uns dort passiert und was wir über ihn träumen.
            </p>
          </div>
        ),
        disableBeacon: true,
      },
      {
        title: "Joyride Is A Great Way To Point At Things",
        target: "body",
        placement: "center",
        content: (
          <div>
            <h4>Impressionen</h4>
            <p>
              Entdecke auf der Karte von Berlin die subjektiven Lebensrealitäten
              sowie Träume von Bewohner:innen in Bezug auf ihre unmittelbare
              Wohnumgebung.
            </p>
          </div>
        ),
        disableBeacon: true,
      },
      {
        title: "Finally ...",
        target: "body",
        placement: "center",
        content: "Take action!",
      },
    ],
  })

  return (
    <React.Fragment>
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
          <img src={Button_tour} />
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
            arrowColor: "#1f9b42",
            backgroundColor: "#ffffff",
            overlayColor: "#5252526a",
            primaryColor: "#E95048",
            textColor: "#000000",
            // width: 900,
            zIndex: 1000,
          },
        }}
      />
    </React.Fragment>
  )
}

export default OnboardingSteps
