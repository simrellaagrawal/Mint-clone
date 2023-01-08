import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
     <Topbar />
     <Navbar />
     <Home />
    </div>
  );
}

export default App;
