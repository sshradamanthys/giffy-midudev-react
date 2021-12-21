import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import { Link, Route } from "wouter";
import StaticContext from "./context/StaticContext";
import { GifsProvider } from "./context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{ msg: "Value Provider" }}>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>
            <Link to="/">Giffy</Link>
          </h3>
          <p>React + wouter + API Giphy </p>
        </header>
        <section className="App-content">
          <GifsProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
