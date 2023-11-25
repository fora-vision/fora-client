import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './i18n/config';
import { Authentication } from './pages/authentication/Authentication';
import { GlobalStyle } from './GlobalStyle';
import { Dashboard } from "./pages/dashboard/Dashboard";
import { SharedLayout } from "./components/sharedLayout/SharedLayout";
import { Reset } from "./pages/reset/Reset";
import { Signup } from "./pages/signup/Signup";
import { sessionStore } from './store/sessionStore';
import { Loading } from './pages/loading/Loading';
import { CoursePage } from './pages/course/CoursePage';
import { Profile } from './pages/profile/Profile';
import { SorryMobile } from './pages/sorry-mobile/SorryMobile';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSessionCode = async () => {
      const code = sessionStore.getSessionCode();
      if (code) {
        sessionStore.setSessionCode(code);
      }
      setIsLoading(false);
    };
    loadSessionCode();
  }, []);

  if (window.screen.width < 550) {
    return <div>
      <GlobalStyle />
      <SorryMobile />
    </div>;
  }

  if (isLoading) {
    return <div>
      <GlobalStyle />
      <Loading />
    </div>;
  }


  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="authentication" element={sessionStore.sessionCode ? <Navigate to="/dashboard" /> : <Authentication />} />
          <Route path="signup" element={sessionStore.sessionCode ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="reset" element={sessionStore.sessionCode ? <Navigate to="/dashboard" /> : <Reset />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="dashboard" element={!sessionStore.sessionCode ? <Navigate to="/authentication" /> : <Dashboard />} />
            <Route path="profile" element={!sessionStore.sessionCode ? <Navigate to="/authentication" /> : <Profile />} />
            <Route path="course/:courseId" element={sessionStore.sessionCode ? <CoursePage /> : <Navigate to="/authentication" />} />
            <Route path="" element={<Navigate to="/authentication" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
