
import { Link } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Search from './components/Search/Search'
import CustomRoutes from './routes/CustomRoutes'

function App() {

  return (
    <div className='outer-pokedex'>
      <h1 id='pokemon-heading'>
        <Link to="/">Pokedex</Link>
      </h1>
      <CustomRoutes />
    </div>
  )
}

export default App

