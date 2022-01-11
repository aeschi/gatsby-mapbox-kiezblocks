import React from "react"
import styled from "styled-components"
import Button_1 from "../images/buttons/button_1.svg"
import Button_2 from "../images/buttons/button_2.svg"
import Button_3 from "../images/buttons/button_3.svg"
import Button_4 from "../images/buttons/button_4.svg"
import Button_5 from "../images/buttons/button_5.svg"
import Button_info from "../images/buttons/button_info.svg"
// import { func, shape, bool } from "prop-types"

const ButtonComponent = styled.div`
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  box-sizing: border-box;
  button {
    width: 50%;
    padding: 2px;
    border: none;
    background: none;
  }
  button:hover {
    opacity: 75%;
    box-shadow: 0px 1.5px black;
  }
`

const Buttons = ({ active, onClick }) => {
  const buttonContent = [
    {
      label: "Kapitel 1",
      buttonImg: Button_1,
      onClick: () => onClick(0),
    },
    {
      label: "Kapitel 2",
      buttonImg: Button_2,
      onClick: () => onClick(1),
    },
    {
      label: "Kapitel 3",
      buttonImg: Button_3,
      onClick: () => onClick(2),
    },
    {
      label: "Kapitel 4",
      buttonImg: Button_4,
      onClick: () => onClick(3),
    },
    {
      label: "Kapitel 5",
      buttonImg: Button_5,
      onClick: () => onClick(4),
    },
    {
      label: "Info",
      buttonImg: Button_info,
      onClick: () => onClick(5),
    },
  ]

  return (
    <ButtonComponent>
      {buttonContent.map((item, key) => {
        return (
          <button
            key={key}
            type="Button"
            onClick={item.onClick}
            isactive={active === key ? 1 : 0}
          >
            <img src={item.buttonImg} height="85%" alt={item.label} />
            {/* {item.label} */}
          </button>
        )
      })}
    </ButtonComponent>
  )
}

Buttons.propTypes = {}

export default Buttons
