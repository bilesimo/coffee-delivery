import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const RightInfo = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ShoppingCartContainer = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  width: 38px;
  height: 38px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;

  div {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${(props) => props.theme['yellow-dark']};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: white;
    font-weight: 700;
  }
`

export const RegionContainer = styled.div`
  background: ${(props) => props.theme['purple-light']};
  padding: 0.5rem 1rem;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['purple-dark']};
`
