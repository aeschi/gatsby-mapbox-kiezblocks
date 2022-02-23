import React from "react"
import styled from "styled-components"
import button_dream from "../images/buttons/button_dream.svg"
import button_reality from "../images/buttons/button_reality.svg"

const ButtonSwitchComponent = styled.div`
  /* color: #000000; */
  display: flex;
  /* flex-direction: row; */
  /* align-items: left; */
  justify-content: space-around;
  box-sizing: border-box;
  button {
    width: 16.6%;
    padding: 2px;
    margin: 1px;
    border: none;
    background: none;
  }
  button:hover {
    opacity: 75%;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    /* line-height: 0.2rem; */
  }
`

const ButtonSwitch = ({ active, onClick }) => {
  const buttonContent = [
    {
      label: "Reality",
      buttonImg: button_reality,
      onClick: () => onClick(0),
    },
    {
      label: "Dream",
      buttonImg: button_dream,
      onClick: () => onClick(1),
    },
  ]

  return (
    <ButtonSwitchComponent>
      {active === 0 && (
        <button
          type="Button"
          onClick={buttonContent[1].onClick}
          isactive={active === 1 ? 1 : 0}
        >
          <img
            src={buttonContent[1].buttonImg}
            height="65%"
            alt={buttonContent[1].label}
          />
        </button>
      )}
      {active === 1 && (
        <button
          type="Button"
          onClick={buttonContent[0].onClick}
          isactive={active === 1 ? 1 : 0}
        >
          <img
            src={buttonContent[0].buttonImg}
            height="65%"
            alt={buttonContent[0].label}
          />
        </button>
      )}
    </ButtonSwitchComponent>
  )
}

ButtonSwitch.propTypes = {}

export default ButtonSwitch
