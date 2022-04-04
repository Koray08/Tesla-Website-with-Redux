import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Bar>
        <ul>
            <li>Tesla © 2022</li>
            <li>Privacy & Legal</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
            <li>Engage</li>
            <li>Locations</li>
        </ul>
    </Bar>
  )
}

export default Footer

const Bar = styled.div`
    position:relative;
    margin-top: -40px;
    height: 40px;
    min-height: 60px;

    ul{
        list-style-type:none;
        gap: 20px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size: small;
    }

    ul li{
        display:inline-block;
        *display:inline; /*IE7*/
        *zoom:1; /*IE7*/

    }
`