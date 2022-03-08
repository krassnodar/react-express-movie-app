import styled from "styled-components/macro";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`

export const ModalContent = styled.div`
  color: white;
  width: 90%;
  border: 1px solid #282c34;
  height: 80%;
  padding: 8px 8px 24px;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%);
  border-radius: 10px;
  background-color: #39445a;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  padding: 8px 8px 24px;

  @media(max-width: 835px) {
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
  }
`

export const PortraitImage = styled.img`
  width: 38%;

  @media(max-width: 835px) {
    display: none;
  }
`

export const LandscapeImage = styled.img`
  width: 38%;
  display: none;

  @media(max-width: 835px) {
    object-fit: contain;
    border-radius: 10px;
    display: block;
    width: 100%;
  }
`

export const MovieInfo = styled.div`
  width: 58%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media(max-width: 835px) {
    margin: 0 auto;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12%;
  font-size: 20px;
`

export const Description = styled.div`
  font-size: 22px;
  font-weight: 100;
  display: flex;
  height: 40%;
  overflow-y: scroll;
  padding: 15px;
  border-radius: 20px;
  scrollbar-width: thin;
  box-shadow: inset 0 0 5px #000000;
  text-align: justify;
`