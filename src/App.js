import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/auth/homepage/HomePage";
import ErrorPage from "./pages/auth/errorpage/ErrorPage";
function App() {
  return (
      <Router his >
        <div className="App">
          <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="*" element={<ErrorPage/>}></Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
