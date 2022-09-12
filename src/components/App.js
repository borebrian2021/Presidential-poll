// import Auth from "./Auth";
import Home from "./Home"
import {BrowserRouter as Link, Router,  Routes,  Route} from 'react-router-dom'

// const testUser = { username: "Duane" };
function App() {
  return (
    <Router>
        <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
   
   
  );
}

export default App;
