import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-top: -2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
  }

  p {
    font-size: 14px;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  margin-top: -3rem;

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
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`

export const BuyingSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.25rem;

  span:first-child {
    font-size: 14px;
    color: ${(props) => props.theme['base-text']};
    margin: 0;
    padding: 0;
  }

  span:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: ${(props) => props.theme['base-text']};
  }
`
export const Quantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  width: 4.5rem;
  height: 2.25rem;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
    font-size: 16px;
    font-weight: bold;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const ShoppingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.purple};
  border-radius: 6px;

  width: 2.25rem;
  height: 2.25rem;
`
