import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    
  }
`

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin: 0 auto;

    @media (max-width: 600px) {
      padding-left: 16px;
      padding-right: 16px;
    }
`
export const AppWrapper = styled.div`
  background-color: #39445a;
  min-height: 100vh;
  padding-top: 70px;
`