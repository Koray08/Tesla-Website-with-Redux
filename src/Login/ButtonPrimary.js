import React from "react";
import styled from "styled-components";

function ButtonPrimary({ name, type, onClick }) {
  return (
    <Primary onClick={onClick} type={type}>
      {name}
    </Primary>
  );
}

export default ButtonPrimary;

const Primary = styled.button`
    background-color: #3e6ae1;
    border: none;
    padding: 12px 40px;
    border-radius: 50px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin-bottom: 30px;
    transition: all .4s;

    &:hover {
      background-color: #3457b1;
    }
`;

