import "./styles/App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { ThemeProvider } from "./context/providers/ThemeContext";
import { FavoriteProvider } from "./context/providers/FavoriteContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <FavoriteProvider>
          <Characters />
        </FavoriteProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
