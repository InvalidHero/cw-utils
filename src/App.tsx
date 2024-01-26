import { NavBar } from './components/NavBar'
import { Main } from './Main/Main'
import { Router, Route } from "@solidjs/router";
import './App.css'

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Router>
        <Route path="/" component={Main} />
      </Router>
    </>
  )
}

export default App
