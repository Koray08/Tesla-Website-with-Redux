import React from "react";
import styled from "styled-components";

function ButtonSecondary({ name, type, onClick }) {
  return (
    <div>
      <Secondary>{name}</Secondary>
    </div>
  );
} 

export default ButtonSecondary;

const Secondary = styled.button`
  margin-left: 15px;
  background-color: transparent;
  border: 3px solid #171a28;
  width: 100%;
  padding: 10px 40px;
  border-radius: 50px;
  text-transform: uppercase;
  color: #171a20;
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;

  &:hover{
      background-color: #171a20;
      color: white;
  }
`;
