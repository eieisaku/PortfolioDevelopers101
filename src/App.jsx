import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'


function App() {
  return (
    <div className="lg:flex lg:flex-row gap-2">
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default App;
