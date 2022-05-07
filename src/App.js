import './App.css';
import Routes from './routes'

function App() {
  const date = new Date()
  console.log(date.toLocaleString())
  return (
    <div className="App">
       <Routes />
          
    </div>
  );
}

export default App;
