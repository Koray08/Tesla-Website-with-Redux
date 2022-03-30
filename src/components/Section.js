import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {useNavigate} from 'react-router-dom';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg, info, arrow}) {
  let navigate = useNavigate();

  return (    
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <Bottom>
            <p>{description}</p>
            &nbsp;
            <span>{info}</span>
          </Bottom>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          {/* <button onClick={() => {navigate(-1)}}>asdasd</button> */}
        </Fade>
          {arrow && <DownArrow src="/images/down-arrow.svg" />
}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  display: "inline";
  h1 {
    margin: 10px 0;
  }
  font-size: 20px;
  padding-top: 15vh;
  text-align: center;

  span {
    cursor: pointer;
    border-bottom: 1px solid black;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 256px;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  border-radius: 100px;
  opacity: 0.99;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.9;
  color: black;
`;



const Buttons = styled.div``;

const Bottom = styled.div`
  display: flex;
  margin-top: 5px;

  span:hover {
    border-bottom: 2px solid black;
  }
`;

const DownArrow = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  animation: animateDown infinite 1.5s;
  color: black;
  filter: brightness(1) invert(1);
  margin-bottom: 10px;

`;