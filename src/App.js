import { render } from "@testing-library/react";
import CCoffee from "./components/CCoffee";
import FCoffee from "./components/FCoffee";

function App() {
  return (
    <>
      <CCoffee firstName="Aner" />
      <FCoffee firstName="Aner" />
    </>
  );
}

export default App;
