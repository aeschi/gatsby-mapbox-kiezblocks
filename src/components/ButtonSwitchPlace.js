import React from "react"
import styled from "styled-components"
import button_alex from "../images/buttons/button_alex.svg"
import button_kap from "../images/buttons/button_kap.svg"

const ButtonSwitchComponent = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-sizing: border-box;
  button {
    height: 100%;
    padding: 1px;
    margin: 1px;
    border: none;
    background: none;
  }
  button:hover {
    opacity: 75%;
  }
`

const ButtonSwitchPlace = ({ activeState, onClick }) => {
  const buttonContent = [
    {
      label: "Reality",
      buttonImg: button_alex,
      onClick: () => onClick(0),
    },
    {
      label: "Dream",
      buttonImg: button_kap,
      onClick: () => onClick(1),
    },
  ]

  return (
    <ButtonSwitchComponent>
      {/* {activeState === 0 && ( */}
        <button
          type="Button"
          onClick={buttonContent[1].onClick}
          isactive={activeState === 1 ? 1 : 0}
        >
          <img
            src={buttonContent[1].buttonImg}
            height="65%"
            alt={buttonContent[1].label}
          />
        </button>
      {/* // )} */}
      {/* {activeState === 1 && ( */}
        <button
          type="Button"
          onClick={buttonContent[0].onClick}
          isactive={activeState === 1 ? 1 : 0}
        >
          <img
            src={buttonContent[0].buttonImg}
            height="65%"
            alt={buttonContent[0].label}
          />
        </button>
      {/* )} */}
    </ButtonSwitchComponent>
  )
}

ButtonSwitchPlace.propTypes = {}

export default ButtonSwitchPlace
