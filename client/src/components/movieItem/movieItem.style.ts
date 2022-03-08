import styled from "styled-components";

export const Wrapper = styled.div`
  width: 200px;
  background-color: #282c34;
  border-radius: 10px;
  padding: 5px;
  margin: 5px 0;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  position: relative;

  &:hover {
    background-color: white;
    color: black;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
`

export const Rating = styled.span`
  color: #fff;
  background-color: #f50057;
  border-radius: 10px;
  padding: 0 6px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 0.75rem;
`

export const Image = styled.img`
  border-radius: 10px;
`