import "./styles/App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { ThemeContextProvider } from "./context/providers/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Characters />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
