import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const Li = styled.li`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`

export const Button = styled.button<any>`
  color: #fff;
  height: 32px;
  width: 32px;
  margin: 0 3px;
  padding: 6px;
  font-weight: 400;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
  font-size: 18px;
  background-color: ${props => props.active ? '#3f51b5' : 'transparent'};
  text-align: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  
    &:hover {
      background-color: rgba(255, 255, 255, 0.08);
    }
`