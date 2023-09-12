import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './i18n/config';
import { Authentication } from './pages/authentication/Authentication';
import { GlobalStyle } from './GlobalStyle';
import { Dashboard } from "./pages/dashboard/Dashboard";
import { SharedLayout } from "./components/sharedLayout/SharedLayout";
import { Reset } from "./pages/reset/Reset";
import { Signup } from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="authentication" element={<Authentication />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset" element={<Reset />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
