import './App.css';
import Home from './components ';
import Routes from './routes'

function App() {
  return (
    <div className="App">
       <Routes exact path="/">
          <Home />
       </Routes>
    </div>
  );
}

export default App;
