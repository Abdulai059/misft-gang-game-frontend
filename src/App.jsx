import Homepage from "./pages/Homepage";
import Characters from "./ui/characters";
import Navbar from "./ui/Navbar";
import ScrollTriggered from "./pages/detailes";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Characters />

      <div>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Scroll to Animate 🍇</h1>
      <ScrollTriggered />
    </div>
    </>
  );
}

export default App;
