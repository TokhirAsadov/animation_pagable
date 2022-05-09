import Pages from "./pages/Pages";
import Category from "./component/Category";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
        <Category />
        <Pages />
    </Router>
  );
}

export default App;
