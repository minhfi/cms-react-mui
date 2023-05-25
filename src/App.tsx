import { FC, useMemo } from 'react'
import { Provider, useSelector } from 'react-redux'
import { Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import { PersistGate } from 'redux-persist/integration/react'

import { genThemeWithPaletteMode } from './constants/mui-theme'
import { createBrowserHistory } from 'history'
import { getThemeMode } from './store/selectors'
import { AppLayout } from './layout'
import { store, persistor } from './store'

const AppTheme: FC = () => {
  const paletteMode = useSelector(getThemeMode)

  // Update the theme only if the mode changes
  const theme = useMemo(
    () => createTheme(genThemeWithPaletteMode(paletteMode)),
    [paletteMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <AppLayout/>
    </ThemeProvider>
  )
}

const App: FC = () => {
  const history = createBrowserHistory()
  const PGate = PersistGate as any

  return (
    <Provider store={store}>
      <PGate
        loading={null}
        persistor={persistor}
      >
        <Router history={history}>
          <AppTheme/>
        </Router>
      </PGate>
    </Provider>
  )
}

export default App
