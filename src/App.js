import logo from "./logo.svg";
import "./App.css";
import Gifs from "./components/Gifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div>
      <header className="App-header">
        <h3>Giffy</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + wouter + API Giphy </p>
      </header>
      <section>
        <Link to="/gif/saitama">Saitama</Link>
        <Link to="/gif/morty">Morty</Link>
        <Link to="/gif/rick">Rick</Link>
      </section>
      <Route component={Gifs} path="/gif/:keyword" />
    </div>
  );
}

export default App;
