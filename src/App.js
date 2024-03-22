import "./App.css";
import Footer from "./components/Footer";
import YourDay from "./components/YourDay";
import "./App.css";
import ModernArtGallery from "./components/ModernArtGallery";

function App() {
  return (
    <div className="flex column space">
      <ModernArtGallery />
      <YourDay />
      <Footer />
    </div>
  );
}

export default App;
