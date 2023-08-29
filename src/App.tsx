import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './i18n/config';
import { Authentication } from './pages/authentication/Authentication';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/">
            <Route path="authentication" element={<Authentication />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
