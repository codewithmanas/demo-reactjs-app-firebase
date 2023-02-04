import logo from './firebase-svgrepo-com.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Deployment is going on here.
        <p>hosted on <code>Firebase</code> with GitHub Actions.</p>
        <a href="https://reactjs.org/">Learn more...</a>
      </header>
    </div>
  );
}

export default App;
