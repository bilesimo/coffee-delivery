import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { SelectedCoffeesProvider } from './context/SelectedCoffeesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <SelectedCoffeesProvider>
          <Router />
        </SelectedCoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
