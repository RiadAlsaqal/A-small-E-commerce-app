import { BrowserRouter as Router } from "react-router-dom";
import Routs from "./Router";
import CardProvider from "./providers/Card/CardProvider";
function App() {
  return (
    <Router>
      <CardProvider>
        <Routs />
      </CardProvider>
    </Router>
  );
}

export default App;
