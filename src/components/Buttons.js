import React from "react"
import styled from "styled-components"
import Button_1 from "../images/buttons/button_1.svg"
import Button_2 from "../images/buttons/button_2.svg"
import Button_3 from "../images/buttons/button_3.svg"
import Button_4 from "../images/buttons/button_4.svg"
import Button_info from "../images/buttons/button_info.svg"
// import { func, shape, bool } from "prop-types"

const ButtonComponent = styled.div`
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
    box-shadow: 0px 1.5px black;
  }
  h4{
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
    text-transform: uppercase;
    /* line-height: 0.2rem; */
  }
`

const Buttons = ({ active, onClick }) => {
  const buttonContent = [
    {
      label: "Thema",
      buttonImg: Button_1,
      onClick: () => onClick(0),
    },
    {
      label: "Impressionen",
      buttonImg: Button_2,
      onClick: () => onClick(1),
    },
    {
      label: "Qualität",
      buttonImg: Button_3,
      onClick: () => onClick(2),
    },
    {
      label: "Vision",
      buttonImg: Button_4,
      onClick: () => onClick(3),
    },
    {
      label: "Zum Projekt",
      buttonImg: Button_info,
      onClick: () => onClick(4),
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
            <img src={item.buttonImg} height="65%" alt={item.label} />
            {/* {item.label} */}
            <h4>{item.label}</h4>
          </button>
        )
      })}
    </ButtonComponent>
  )
}

Buttons.propTypes = {}

export default Buttons
