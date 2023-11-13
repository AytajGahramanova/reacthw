import Header from "./components/Header";
import Home from "./pages/Home";
import Cards from "./pages/Cards";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
