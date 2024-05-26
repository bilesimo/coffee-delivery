import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoRegion = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Titles = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 36.75rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 'extrabold';
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ListOfDiffs = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 36.75rem;

  li {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0.75rem;

    span {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

export const PurpleContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme.purple};
`

export const GrayContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme['base-text']};
`

export const YellowContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme.yellow};
`

export const YellowDarkContainer = styled(IconContainer)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
