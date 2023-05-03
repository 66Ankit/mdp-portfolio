import './App.css'
import Contact from './components/Contact/Contact';
import Home from "./components/Home/Home";
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      <Home/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
