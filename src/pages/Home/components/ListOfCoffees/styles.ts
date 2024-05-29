import styled from 'styled-components'

export const ListOfCoffeesContainer = styled.div`
  display: flex;
  justify-content: initial;
  padding: 1rem 10rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: extra-bold;
  }
`
