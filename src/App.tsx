
import AppProviders from './app/AppProviders'
import AppRoutes from './app/AppRoutes'
import Header from './Header'

  
function App() {

  return (
    <AppProviders>
      <Header />
      <AppRoutes />
    </AppProviders>
  )
}

export default App
