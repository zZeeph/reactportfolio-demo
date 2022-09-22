import './App.css';
import About from './components/About';
import { Business } from './components/Business';
import { News } from './components/News';

function App() {
  return (
    <div className="App">
      <About />
      <News />
      <Business />
    </div>
  );
}

export default App;
