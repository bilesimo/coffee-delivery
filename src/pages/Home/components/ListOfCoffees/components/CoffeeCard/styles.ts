import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  position: relative;
  margin: 1rem;
  padding: 1rem;
  width: 16rem;
  height: 19.5rem;
  border-radius: 6px 36px 6px 36px;

  img {
    width: 120px;
    height: 120px;
    position: relative;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 13px;
    font-weight: bold;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
  }
`

export const BuyingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
`
export const Quantity = styled.div``
export const ShoppingButton = styled.div``
