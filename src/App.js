import { Link, Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import StaticContext from "./context/StaticContext";
import { GifsProvider } from "./context/GifsContext";
import "./App.css";

function App() {
  return (
    <StaticContext.Provider value={{ msg: "Value Provider" }}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <figure className="App-logo">
              <img alt="Giffy logo" src="/logo.png" />
            </figure>
          </Link>
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
