import './App.css'
import Card from './components/card/Card'
import Countries from './components/countries/Countries'
import ErrorBoundaryComponent from './error/ErrorBoundary'

function App() {

  return (
    <>
    <ErrorBoundaryComponent fallback={<div>Nema podataka za prikaz.</div>}>
      <div>
        <Countries />
      </div>
    </ErrorBoundaryComponent>
    
    </>
  )
}

export default App
