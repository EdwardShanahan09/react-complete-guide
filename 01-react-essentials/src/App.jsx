import Header from "./components/Header/Header.jsx";
import Examples from "./components/Examples/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcept.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
