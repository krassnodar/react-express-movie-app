import styled from "styled-components";


export const SearchForm = styled.form`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  margin: 10px 0;
  position: relative;
`

export const SearchInput = styled.input`
  padding: 27px 12px 10px;
  background: none;
  transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  background-color: rgba(255, 255, 255, 0.09);
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  flex-grow: 1;
  font-size: 17px;
  outline: none;
  color: #fff;

    &:focus {
      border-bottom: 2px solid #fff;
    }

    &::placeholder {
      color: #C9CCD2;
    }

`

export const SearchButton = styled.button`
  color: rgba(0, 0, 0, 0.87);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
  padding: 6px 16px;
  min-width: 64px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #e0e0e0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseIcon = styled.div<any>`
  visibility: ${props => props.hidden && 'hidden'};
  position: absolute;
  padding: 5px;
  right: 110px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #afabac;
  cursor: pointer;

  &:hover {
    color: #1e1f21;
  }
` 
