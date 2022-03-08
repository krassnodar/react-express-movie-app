import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  background-color: #39445A;
  box-shadow: 0px 1px 5px black;
  position: fixed;
  width: 100%;
  top: 0;
  text-align: center;
  cursor: pointer;
  color: white;
  z-index: 100;
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  
    @media (max-width: 500px) {
      font-size: 30px;
    }
`


