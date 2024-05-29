import styled from 'styled-components'

export const ListOfCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: initial;
  padding: 1rem 10rem;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: extra-bold;
  }

  section {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(4, 1fr);
  }
`
