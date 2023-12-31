import styled from "styled-components";
import {Button} from "../../atoms/Button/Button";

export const SlideWrapper = styled.div`
  position: relative;
  height: 100%;
  background-size: cover;
  background-position: center;
  width: 100%;
  display: block;
  transition: all .3s ease-in-out;

  span {
    position: absolute;
    top: 50%;
    height: 50px;
    width: 50px;
    background-color: rgba(248, 249, 250, 0.1);
    border: 1px solid rgba(226, 226, 226, 0.1);
    border-radius: 50%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);

    svg polyline {
      stroke: white;
    }

    &:first-of-type {
      left: 20px;
    }

    &:last-of-type {
      right: 20px;
    }    
  }

  &:hover span {
    background-color: rgba(248, 249, 250, 1);

    svg polyline {
      stroke: ${({theme}) => theme.colors.accent};
    }
  }
`
export const SlideText = styled.div`
  color: white;
  max-width: 420px;
  position: absolute;
  left: 100px;
  top:30%;
 
  
  p {
    font-size: 16px;
    color: rgba(255, 255, 255, .8);
  }
  
  ${Button} {
    margin-right: 10px;
  }
`
export const SlideHeader = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 62.4px;
  font-family: 'Manrope', sans-serif;
 
`
